import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("mb-4 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-sand" : "text-olive")}>{children}</p>;
}

export function SectionTitle({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="mb-10 max-w-3xl"><Eyebrow light={light}>{eyebrow}</Eyebrow><h2 className={cn("font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>{copy && <p className={cn("mt-5 max-w-2xl text-base leading-7", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{copy}</p>}</div>;
}

export function PageHero({ label, title, text, children }: { label: string; title: string; text: string; children?: ReactNode }) {
  return <section className="relative overflow-hidden bg-primary px-5 pb-20 pt-32 text-primary-foreground sm:px-8 lg:pb-28 lg:pt-40"><div className="pointer-events-none absolute inset-0 pattern-grid opacity-20"/><div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><Eyebrow light>{label}</Eyebrow><h1 className="font-display text-5xl font-semibold leading-[0.96] sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/70">{text}</p></div>{children && <div className="flex items-end lg:col-span-4">{children}</div>}</div></section>;
}

export function CtaBand() {
  return <section className="mx-4 mb-6 overflow-hidden rounded-[2rem] bg-gold px-6 py-14 sm:mx-8 sm:px-12 lg:mx-auto lg:max-w-7xl lg:px-16"><div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]"><div><Eyebrow>There is room for your idea</Eyebrow><h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-primary sm:text-6xl">Join the community shaping what comes next.</h2></div><Button asChild size="lg" variant="navy"><Link to="/my-sait">Open My SAIT <ArrowRight/></Link></Button></div></section>;
}

export function Photo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <div className={cn("group overflow-hidden rounded-[1.5rem] bg-muted", className)}><img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"/></div>;
}