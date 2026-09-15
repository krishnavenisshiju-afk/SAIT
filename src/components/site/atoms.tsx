import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("mb-4 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-sand" : "text-olive")}>{children}</p>;
}

export function SectionTitle({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><Eyebrow light={light}>{eyebrow}</Eyebrow><h2 className={cn("font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>{copy && <p className={cn("mt-5 max-w-2xl text-base leading-7", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{copy}</p>}</div>;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={cn("home-reveal", visible && "home-reveal-visible", className)}>{children}</section>;
}

export function CountUp({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const duration = 850;
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return <span ref={elementRef}>{prefix}{count}{suffix}</span>;
}

export function ProgressRing({ value }: { value: number }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const element = ringRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <svg aria-label={`${value}% complete`} role="img" viewBox="0 0 112 112" className="size-28 -rotate-90"><circle cx="56" cy="56" r={radius} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="8"/><circle ref={ringRef} cx="56" cy="56" r={radius} fill="none" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={visible ? circumference * (1 - value / 100) : circumference} className="progress-ring-stroke"/><text x="56" y="61" textAnchor="middle" className="-rotate-90 fill-current font-display text-[16px]">{value}%</text></svg>;
}

export function InteractiveGrid({ className }: { className?: string }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = gridRef.current;
    if (!element || !window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let currentX = 50;
    let currentY = 50;
    let currentInfluence = 0;
    let targetX = 50;
    let targetY = 50;
    let targetInfluence = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      currentInfluence += (targetInfluence - currentInfluence) * 0.12;
      element.style.setProperty("--grid-x", `${currentX}%`);
      element.style.setProperty("--grid-y", `${currentY}%`);
      element.style.setProperty("--grid-influence", `${currentInfluence}`);
      element.style.setProperty("--grid-shift-x", `${(currentX - 50) * 0.035}px`);
      element.style.setProperty("--grid-shift-y", `${(currentY - 50) * 0.035}px`);
      if (Math.abs(targetInfluence - currentInfluence) > 0.01 || targetInfluence > 0) frame = requestAnimationFrame(render);
      else frame = 0;
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const reset = () => { targetInfluence = 0; schedule(); };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      const bounds = element.getBoundingClientRect();
      const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
      if (!inside) return reset();
      targetX = ((event.clientX - bounds.left) / bounds.width) * 100;
      targetY = ((event.clientY - bounds.top) / bounds.height) * 100;
      targetInfluence = 1;
      schedule();
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", reset);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("blur", reset); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <div ref={gridRef} aria-hidden="true" className={cn("interactive-grid", className)} />;
}

export function PageHero({ label, title, text, children }: { label: string; title: string; text: string; children?: ReactNode }) {
  return <Reveal className="relative overflow-hidden bg-primary px-5 pb-20 pt-32 text-primary-foreground sm:px-8 lg:pb-28 lg:pt-40"><InteractiveGrid className="pointer-events-none absolute inset-0 pattern-grid opacity-20"/><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><Eyebrow light>{label}</Eyebrow><h1 className="font-display text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/70">{text}</p></div>{children && <div className="flex items-end lg:col-span-4">{children}</div>}</div></Reveal>;
}

export function CtaBand() {
  return <section className="mx-4 mb-6 overflow-hidden rounded-[2rem] bg-gold px-6 py-14 sm:mx-8 sm:px-12 lg:mx-auto lg:max-w-7xl lg:px-16"><div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div><Eyebrow>There is room for your idea</Eyebrow><h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-primary sm:text-6xl">Join the community shaping what comes next.</h2></div><Button asChild size="lg" variant="navy"><Link to="/my-sait">Open My SAIT <ArrowRight/></Link></Button></div></section>;
}

export function Photo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <div className={cn("group overflow-hidden rounded-[1.5rem] bg-muted", className)}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"/></div>;
}