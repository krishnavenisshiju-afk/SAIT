import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHero, Reveal, SectionTitle } from "./atoms";
import { announcements } from "@/data/site";

const wrap = "mx-auto max-w-7xl px-5 sm:px-8";
const section = "py-20 lg:py-28";

export function AnnouncementsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(announcements.map(announcement => announcement.category))];
  const shown = announcements.filter(announcement => (category === "All" || announcement.category === category) && announcement.title.toLowerCase().includes(query.toLowerCase()));
  return <>
    <PageHero label="Announcements" title="The things worth knowing." text="Deadlines, registrations and department updates—kept clear, current and easy to find."/>
    <Reveal className={`${section} ${wrap}`}><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionTitle eyebrow="Notice board" title="Stay close to what matters." copy="Recent registrations, community updates and department notes from SAIT."/><div className="relative w-full sm:max-w-xs"><Search className="absolute left-4 top-3.5 size-4 text-muted-foreground"/><Input aria-label="Search announcements" className="h-12 rounded-full pl-11" placeholder="Search notices" value={query} onChange={event => setQuery(event.target.value)}/></div></div><div className="flex gap-2 overflow-x-auto pb-2">{categories.map(option => <Button key={option} size="sm" variant={category === option ? "navy" : "outline"} aria-pressed={category === option} onClick={() => setCategory(option)} className="shrink-0">{option}</Button>)}</div><div className="announcement-list mt-10 divide-y divide-border border-y border-border">{shown.map((announcement, index) => <article className={`announcement-row grid gap-5 py-7 md:grid-cols-[110px_1fr_auto] ${announcement.urgent ? "announcement-important" : ""}`} key={announcement.title}><div><p className="font-display text-2xl text-gold">{announcement.date}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-olive">{announcement.category}</p></div><div><div className="flex flex-wrap items-center gap-3"><h2 className="break-words font-display text-2xl">{announcement.title}</h2>{announcement.urgent && <span className="status-badge status-important">Important</span>}</div><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{announcement.body}</p></div><Button variant="ghost" size="icon" aria-label={`Open ${announcement.title}`}><ArrowRight/></Button></article>)}</div><p className="mt-5 text-sm text-muted-foreground">{shown.length} {shown.length === 1 ? "notice" : "notices"}</p></Reveal>
  </>;
}
