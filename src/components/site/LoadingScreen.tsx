import { useEffect, useMemo, useState, type CSSProperties } from "react";

const SESSION_KEY = "sait-loaded";

type Sparkle = {
  left: string;
  top: string;
  delay: string;
  duration: string;
  square: boolean;
};

export function LoadingScreen() {
  const sparkles = useMemo<Sparkle[]>(() => Array.from({ length: 10 }, (_, index) => ({
    left: `${10 + Math.random() * 80}%`,
    top: `${12 + Math.random() * 76}%`,
    delay: `${Math.random() * 2.2}s`,
    duration: `${2.5 + Math.random() * 2}s`,
    square: index % 3 === 0,
  })), []);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    let frame = 0;
    let closeTimer = 0;
    let unmountTimer = 0;
    const startTimer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setMounted(true);
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        setProgress(100);
        closeTimer = window.setTimeout(() => {
          setFading(true);
          unmountTimer = window.setTimeout(() => setMounted(false), 400);
        }, 300);
        return;
      }
      const startedAt = performance.now();
      const update = (now: number) => {
        const next = Math.min((now - startedAt) / 1100, 1);
        setProgress(next * 100);
        if (next < 1) frame = requestAnimationFrame(update);
        else {
          setProgress(100);
          closeTimer = window.setTimeout(() => {
            setFading(true);
            unmountTimer = window.setTimeout(() => setMounted(false), 400);
          }, 150);
        }
      };
      frame = requestAnimationFrame(update);
    }, 0);
    return () => {
      window.clearTimeout(startTimer);
      cancelAnimationFrame(frame);
      window.clearTimeout(closeTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;
  return <div className={`sait-loading-overlay ${fading ? "is-fading" : ""}`} role="status" aria-live="polite" aria-label="Loading SAIT">
    <div className="pointer-events-none absolute inset-0 pattern-grid opacity-15" />
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">{sparkles.map((sparkle, index) => <span key={index} className={`sait-loading-sparkle ${sparkle.square ? "sait-loading-square" : ""}`} style={{ left: sparkle.left, top: sparkle.top, animationDelay: sparkle.delay, animationDuration: sparkle.duration } as CSSProperties} />)}</div>
    <div className="sait-loading-content relative flex flex-col items-center px-6 text-center">
      <span className="grid size-10 place-items-center rounded-xl bg-gold font-display text-sm font-bold text-primary">S</span>
      <span className="mt-5 font-display text-2xl font-semibold text-primary-foreground">SAIT</span>
      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Learn · Build · Connect</span>
      <div className="sait-loading-progress mt-8" aria-hidden="true"><span className="sait-loading-progress-fill" style={{ width: `${progress}%` }} /></div>
    </div>
  </div>;
}
