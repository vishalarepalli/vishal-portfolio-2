/**
 * Audio System Manager for Vishal Arepalli's Portfolio
 * Supports:
 * - Synchronized cinematic whoosh sound for name reveal
 * - UI tactile sound effects
 */

class SoundController {
  private whooshAudio: HTMLAudioElement | null = null;
  private clickAudio: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Auto-unlock audio context on user gesture if needed
    if (typeof window !== 'undefined') {
      const unlock = () => {
        if (!this.audioCtx) {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          if (AudioContextClass) {
            this.audioCtx = new AudioContextClass();
          }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }
        window.removeEventListener('pointerdown', unlock);
        window.removeEventListener('keydown', unlock);
        window.removeEventListener('touchstart', unlock);
      };

      window.addEventListener('pointerdown', unlock, { passive: true });
      window.addEventListener('keydown', unlock, { passive: true });
      window.addEventListener('touchstart', unlock, { passive: true });
    }
  }

  public playWhoosh() {
    if (this.isMuted) return;
    try {
      if (!this.whooshAudio) {
        this.whooshAudio = new Audio('/audio/whoosh.wav');
        this.whooshAudio.preload = 'auto';
      }
      this.whooshAudio.volume = 1.0;
      this.whooshAudio.currentTime = 0;
      
      const playPromise = this.whooshAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback to Web Audio synthesis if autoplay policy restricts element
          this.synthesizeWhooshFallback();
        });
      }
    } catch (e) {
      console.warn('Could not play whoosh audio', e);
      this.synthesizeWhooshFallback();
    }
  }

  private synthesizeWhooshFallback() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      // 1. Noise whoosh buffer
      const bufferSize = ctx.sampleRate * 2.2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(60, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.55);
      filter.frequency.exponentialRampToValueAtTime(80, now + 2.0);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.9, now + 0.55);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      // 2. Sub-bass punch
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(40, now);
      osc.frequency.exponentialRampToValueAtTime(85, now + 0.55);
      osc.frequency.exponentialRampToValueAtTime(32, now + 2.0);

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.01, now);
      subGain.gain.exponentialRampToValueAtTime(0.95, now + 0.55);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

      osc.connect(subGain);
      subGain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 2.2);
      osc.start(now);
      osc.stop(now + 2.2);
    } catch {}
  }

  public playClick() {
    if (this.isMuted) return;
    try {
      if (!this.clickAudio) {
        this.clickAudio = new Audio('/audio/click.wav');
        this.clickAudio.volume = 0.35;
      }
      this.clickAudio.currentTime = 0;
      this.clickAudio.play().catch(() => {});
    } catch {}
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.whooshAudio) {
      this.whooshAudio.muted = this.isMuted;
    }
    return this.isMuted;
  }
}

export const soundManager = new SoundController();
