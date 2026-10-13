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
  buffer.writeUInt32LE(16, 16); // Subchunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // BitsPerSample (16 bits)

  // DATA sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  let offset = 44;
  for (let i = 0; i < samplesL.length; i++) {
    // Soft limiter tanh
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

// Cinematic Netflix-Style Title Sound ("Ta-Dum" Impact + Sub-Bass + Metallic Harmonic Ring)
function generateCinematicTitleSound() {
  const sampleRate = 44100;
  const duration = 3.6; // 3.6 seconds
  const numSamples = Math.floor(sampleRate * duration);

  const samplesL = new Float32Array(numSamples);
  const samplesR = new Float32Array(numSamples);

  // Hit 1: "Ta" at t = 0.05s
  const t1 = 0.05;
  // Hit 2: "Dum" at t = 0.28s (Massive sub-bass impact)
  const t2 = 0.28;

  // Harmonic shimmer frequencies (D minor / D major cinematic anvil: D3, A3, D4, F#4, A4, D5)
  const shimmerFreqs = [146.83, 220.0, 293.66, 370.0, 440.0, 587.33, 880.0];

  let hit1Phase = 0;
  let hit2Phase = 0;
  let subRumblePhase = 0;
  const shimmerPhasesL = new Float64Array(shimmerFreqs.length);
  const shimmerPhasesR = new Float64Array(shimmerFreqs.length);

  let noiseL = 0, noiseR = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    let outL = 0;
    let outR = 0;

    // 1. HIT 1: "Ta" (t >= 0.05s)
    if (t >= t1 && t < t1 + 0.35) {
      const dt1 = t - t1;
      const env1 = Math.exp(-dt1 * 14.0); // fast decay
      // Pitch drop 75Hz -> 50Hz
      const freq1 = 50 + 25 * Math.exp(-dt1 * 25);
      hit1Phase += 2 * Math.PI * freq1 / sampleRate;
      
      // Transient click + body
      const click = (Math.random() * 2 - 1) * Math.exp(-dt1 * 70);
      const body = Math.sin(hit1Phase) * 0.7 + Math.sin(hit1Phase * 2) * 0.3;
      
      outL += (body + click * 0.3) * env1 * 0.85;
      outR += (body + click * 0.3) * env1 * 0.75;
    }

    // 2. HIT 2: "Dum" (t >= 0.28s) - Heavy Sub-Bass Boom
    if (t >= t2) {
      const dt2 = t - t2;
      const env2 = Math.exp(-dt2 * 3.2); // long, warm sub decay
      
      // Sub pitch sweep: starts at 62Hz, drops to deep 38Hz
      const freq2 = 38 + 24 * Math.exp(-dt2 * 6.0);
      hit2Phase += 2 * Math.PI * freq2 / sampleRate;

      // Heavy sub-bass waveform (fundamental + 2nd + 3rd harmonic for warmth)
      const sub = Math.sin(hit2Phase) * 0.85 + 
                  Math.sin(hit2Phase * 2) * 0.35 + 
                  Math.sin(hit2Phase * 3) * 0.15;

      // Punchy transient at start of hit 2
      const punch = Math.sin(2 * Math.PI * 120 * dt2) * Math.exp(-dt2 * 35) * 0.4;

      outL += (sub + punch) * env2 * 1.1;
      outR += (sub + punch) * env2 * 1.1;
    }

    // 3. CINEMATIC WHOOSH & SWELL (builds up into Hit 2, then exhales)
    const whooshEnv = Math.exp(-Math.pow((t - t2) * 3.5, 2));
    const white = Math.random() * 2 - 1;
    noiseL = 0.94 * noiseL + white * 0.08;
    noiseR = 0.93 * noiseR + white * 0.09;
    const whoosh = (noiseL + noiseR) * 0.5 * whooshEnv * 0.55;
    outL += whoosh * 0.9;
    outR += whoosh * 1.1;

    // 4. METALLIC HARMONIC SHIMMER (blooms after Hit 2)
    if (t >= t2) {
      const dtShimmer = t - t2;
      const shimmerEnv = Math.min(1.0, dtShimmer * 12) * Math.exp(-dtShimmer * 1.4);

      let shimmerMixL = 0;
      let shimmerMixR = 0;

      for (let s = 0; s < shimmerFreqs.length; s++) {
        // Subtle stereo detune & vibrato
        const fL = shimmerFreqs[s] * (1.0 + 0.002 * Math.sin(2 * Math.PI * 3.5 * t + s));
        const fR = shimmerFreqs[s] * (1.0 - 0.002 * Math.cos(2 * Math.PI * 3.5 * t + s));

        shimmerPhasesL[s] += 2 * Math.PI * fL / sampleRate;
        shimmerPhasesR[s] += 2 * Math.PI * fR / sampleRate;

        const weight = 1.0 / (s * 0.6 + 1);
        shimmerMixL += (Math.sin(shimmerPhasesL[s]) + 0.25 * Math.sin(shimmerPhasesL[s] * 2)) * weight;
        shimmerMixR += (Math.sin(shimmerPhasesR[s]) + 0.25 * Math.sin(shimmerPhasesR[s] * 2)) * weight;
      }

      outL += shimmerMixL * shimmerEnv * 0.32;
      outR += shimmerMixR * shimmerEnv * 0.32;
    }

    // 5. DEEP SUB-RUMBLE AIR TAIL
    if (t > t2) {
      const dtSub = t - t2;
      const rumbleEnv = Math.exp(-dtSub * 1.8);
      subRumblePhase += 2 * Math.PI * 32.0 / sampleRate;
      const rumble = Math.sin(subRumblePhase) * 0.25 * rumbleEnv;
      outL += rumble;
      outR += rumble;
    }

    samplesL[i] = outL;
    samplesR[i] = outR;
  }

  return createWavBuffer(sampleRate, 2, samplesL, samplesR);
}

// Generate Click
function generateClick() {
  const sampleRate = 44100;
  const duration = 0.15;
  const numSamples = Math.floor(sampleRate * duration);
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env = Math.exp(-t * 35);
    const wave = Math.sin(2 * Math.PI * 1200 * t) * 0.5 + Math.sin(2 * Math.PI * 2400 * t) * 0.25;
    samples[i] = wave * env * 0.4;
  }

  return createWavBuffer(sampleRate, 1, samples);
}

const outDir = path.resolve('public/audio');
fs.writeFileSync(path.join(outDir, 'whoosh.wav'), generateCinematicTitleSound());
fs.writeFileSync(path.join(outDir, 'click.wav'), generateClick());

console.log('Cinematic title sound (Ta-Dum + sub-bass + shimmer) generated into whoosh.wav');
