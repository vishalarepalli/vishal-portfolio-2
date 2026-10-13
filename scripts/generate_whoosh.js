import fs from 'fs';
import path from 'path';

function createWavBuffer(sampleRate, numChannels, samplesL, samplesR) {
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samplesL.length * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF chunk descriptor
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // FMT sub-chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34);

  // DATA sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < samplesL.length; i++) {
    const sL = Math.tanh(samplesL[i]);
    const valL = Math.floor(sL * 32767);
    buffer.writeInt16LE(valL, offset);
    offset += 2;

    if (numChannels === 2) {
      const sR = Math.tanh(samplesR ? samplesR[i] : samplesL[i]);
      const valR = Math.floor(sR * 32767);
      buffer.writeInt16LE(valR, offset);
      offset += 2;
    }
  }

  return buffer;
}

// Cinematic Title Whoosh Sound (Dramatic Riser + Sub-Bass Impact Boom + Stereo Air Sweep)
function generateCinematicWhoosh() {
  const sampleRate = 44100;
  const duration = 2.8; // 2.8 seconds
  const numSamples = Math.floor(sampleRate * duration);
  const peakTime = 0.55; // Peak hit at 0.55s

  const samplesL = new Float32Array(numSamples);
  const samplesR = new Float32Array(numSamples);

  let b0L = 0, b1L = 0, b2L = 0;
  let b0R = 0, b1R = 0, b2R = 0;
  let subPhase = 0;
  let sweepPhase = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;

    // 1. ENVELOPE: Smooth exponential rise up to peakTime, followed by natural cinematic room decay
    let riseEnv = 0;
    let decayEnv = 0;

    if (t < peakTime) {
      // Powerful exponential rise
      riseEnv = Math.pow(t / peakTime, 3.2);
    } else {
      const dt = t - peakTime;
      decayEnv = Math.exp(-dt * 3.4);
    }

    const currentEnv = t < peakTime ? riseEnv : decayEnv;

    // 2. SUB-BASS SWEEP: Pitch climbs from 35Hz to 75Hz at peak, then falls to 32Hz deep rumble
    let subFreq;
    if (t < peakTime) {
      subFreq = 35 + 40 * Math.pow(t / peakTime, 2);
    } else {
      const dt = t - peakTime;
      subFreq = 75 - 43 * (1 - Math.exp(-dt * 4));
    }
    subPhase += 2 * Math.PI * subFreq / sampleRate;

    // Rich sub wave (fundamental + 2nd harmonic)
    const sub = Math.sin(subPhase) * 0.75 + Math.sin(subPhase * 2) * 0.25;

    // 3. AIR WHOOSH (Resonant Pink & White Noise Sweep with stereo motion)
    const whiteL = Math.random() * 2 - 1;
    const whiteR = Math.random() * 2 - 1;

    // Dynamic filter cutoff frequency sweeping up to peak, then lowering
    const filterFactor = t < peakTime ? Math.pow(t / peakTime, 2) : Math.exp(-(t - peakTime) * 3);
    const alpha = 0.05 + 0.35 * filterFactor;

    b0L = (1 - alpha) * b0L + alpha * whiteL;
    b1L = (1 - alpha) * b1L + alpha * b0L;
    b2L = (1 - alpha) * b2L + alpha * b1L;

    b0R = (1 - alpha) * b0R + alpha * whiteR;
    b1R = (1 - alpha) * b1R + alpha * b0R;
    b2R = (1 - alpha) * b2R + alpha * b1R;

    const noiseL = (b0L + b1L * 0.5 + b2L * 0.25) * 1.6;
    const noiseR = (b0R + b1R * 0.5 + b2R * 0.25) * 1.6;

    // 4. PEAK IMPACT TRANSIENT (at t == peakTime)
    let impact = 0;
    if (t >= peakTime && t < peakTime + 0.4) {
      const dtImpact = t - peakTime;
      const punchFreq = 90 * Math.exp(-dtImpact * 18);
      sweepPhase += 2 * Math.PI * punchFreq / sampleRate;
      impact = Math.sin(sweepPhase) * Math.exp(-dtImpact * 12) * 0.6;
    }

    // 5. STEREO PANNING MOTION (sweeping from Left to Center to Right)
    const pan = Math.sin((t / duration) * Math.PI - Math.PI / 4) * 0.3; // -0.2 to +0.2

    const sampleL = ((sub * 0.8 + noiseL * 0.85) * currentEnv + impact) * (1 - pan);
    const sampleR = ((sub * 0.8 + noiseR * 0.85) * currentEnv + impact) * (1 + pan);

    // Warm soft clipping
    samplesL[i] = sampleL * 1.15;
    samplesR[i] = sampleR * 1.15;
  }

  return createWavBuffer(sampleRate, 2, samplesL, samplesR);
}

const outDir = path.resolve('public/audio');
fs.writeFileSync(path.join(outDir, 'whoosh.wav'), generateCinematicWhoosh());

console.log('Authentic cinematic whoosh audio generated into public/audio/whoosh.wav');
