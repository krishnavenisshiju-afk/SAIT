import { BookOpen, BriefcaseBusiness, FileCheck2, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp, Eyebrow, PageHero, Reveal, SectionTitle } from "./atoms";
import { companies } from "@/data/site";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";
const section = "py-20 lg:py-28";
const resources: Array<[LucideIcon, string, string]> = [[BriefcaseBusiness, "Internship desk", "Curated openings and application reviews."], [Users, "Alumni mentoring", "One-to-one conversations with recent graduates."], [FileCheck2, "Portfolio clinic", "Feedback on résumés, GitHub and project narratives."], [BookOpen, "Interview library", "Practice sets and role-specific preparation notes."]];

export function PlacementsPage() {
  return <>
    <PageHero label="Placements" title="Ready for work that matters." text="Career preparation shaped by practice, honest guidance and a strong network of peers and alumni."/>
    <Reveal className={`${section} ${wrap}`}><div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border sm:grid-cols-3">{[[92, "%", "placed or pursuing higher studies"], [12.4, "L", "highest annual package"], [46, "", "recruiting organisations"]].map(([value, suffix, label]) => <article className="placement-stat bg-card p-8 lg:p-9" key={String(label)}><strong className="font-display text-5xl text-olive"><CountUp value={Number(value)} suffix={String(suffix)} prefix={String(value) === "12.4" ? "₹" : ""}/></strong><p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p></article>)}</div></Reveal>
    <Reveal className="bg-secondary py-20"><div className={wrap}><SectionTitle eyebrow="Recruiters" title="Teams our students have joined"/><div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] bg-border sm:grid-cols-4">{companies.map(company => <div className="placement-company grid min-h-28 place-items-center bg-background px-3 text-center font-display text-xl text-foreground/70" key={company}>{company}</div>)}</div></div></Reveal>
    <Reveal className={`${section} ${wrap}`}><div className="grid gap-6 lg:grid-cols-12"><div className="lg:col-span-5"><SectionTitle eyebrow="Career studio" title="Preparation, without the pressure theatre." copy="Mock interviews, portfolio clinics and small-group alumni conversations give students practical, candid support."/><Button variant="gold">Explore career support</Button></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">{resources.map(([Icon, title, text]) => <article className="placement-resource rounded-[1.5rem] bg-secondary p-6" key={title}><Icon className="text-olive"/><h3 className="mt-8 font-display text-xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></article>)}</div></div></Reveal>
  </>;
}
