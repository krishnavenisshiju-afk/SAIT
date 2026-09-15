import { Reveal, Eyebrow, PageHero, Photo, SectionTitle } from "./atoms";
import { images } from "@/data/site";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";
const section = "py-20 lg:py-28";
const alumni = [["2012", "Rakesh Nair", "Cloud architect · Toronto"], ["2018", "Amina Fathima", "AI researcher · Bengaluru"], ["2022", "Gokul Raj", "Founder · Kochi"]];

export function AlumniPage() {
  return <>
    <PageHero label="Alumni" title="The community travels with you." text="Stories of graduates carrying what they learned at CUSAT into ambitious teams, research labs and ventures around the world."/>
    <Reveal className={`${section} ${wrap}`}><div className="grid gap-8 lg:grid-cols-12"><Photo src={images.workshop} alt="Alumni sharing experience with students" className="aspect-[4/3] lg:col-span-7"/><article className="alumni-featured rounded-[1.75rem] bg-gold p-8 lg:col-span-5"><Eyebrow>Featured alumni · 2016</Eyebrow><blockquote className="font-display text-3xl leading-tight">“SAIT taught me that the best technical work begins by listening well.”</blockquote><p className="mt-8 font-semibold">Malavika Suresh</p><p className="text-sm text-foreground/65">Product Design Lead · Bengaluru</p></article></div></Reveal>
    <Reveal className="bg-secondary py-20"><div className={wrap}><SectionTitle eyebrow="Journeys" title="From campus to everywhere" copy="A few paths from the SAIT community, carried forward into new teams and disciplines."/><div className="grid gap-5 md:grid-cols-3">{alumni.map(([batch, name, role]) => <article className="alumni-profile rounded-[1.5rem] bg-background p-7" key={name}><p className="font-display text-4xl text-gold">{batch}</p><p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-olive">Batch {batch}</p><h3 className="mt-2 break-words font-display text-2xl">{name}</h3><p className="mt-2 text-sm text-muted-foreground">{role}</p></article>)}</div></div></Reveal>
    <Reveal className={`${section} ${wrap}`}><SectionTitle eyebrow="Community notes" title="Advice worth passing on"/><div className="grid gap-6 lg:grid-cols-2"><blockquote className="alumni-note rounded-[1.75rem] border border-border p-8 font-display text-2xl leading-relaxed">“Build one thing deeply. Document the messy decisions. That story is more valuable than ten certificates.”</blockquote><blockquote className="alumni-note rounded-[1.75rem] bg-olive p-8 font-display text-2xl leading-relaxed text-primary-foreground">“Your classmates become your first collaborators, critics and professional network. Invest in them.”</blockquote></div></Reveal>
  </>;
}
