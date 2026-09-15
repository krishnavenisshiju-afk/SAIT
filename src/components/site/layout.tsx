import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./atoms";
import logo from "@/assets/logo-seal.jpg";

const links = [
  ["About", "/about"], ["People", "/people"], ["Events", "/events"], ["Placements", "/placements"],
  ["Alumni", "/alumni"], ["Achievements", "/achievements"], ["Notices", "/announcements"],
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(window.scrollY > 20);
        setProgress(max > 0 ? window.scrollY / max * 100 : 0);
        frame = 0;
      });
    };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div className="min-h-screen bg-background">
    <div className="fixed left-0 top-0 z-[70] h-0.5 bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }}/>
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/90 shadow-soft backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3"><img src={logo} alt="SAIT official logo" className="size-10 shrink-0 rounded-full object-cover"/><span className="min-w-0"><strong className={cn("block truncate font-display text-base", scrolled ? "text-foreground" : "text-primary-foreground")}>SAIT</strong><span className={cn("block truncate text-[10px] uppercase tracking-[0.15em]", scrolled ? "text-muted-foreground" : "text-primary-foreground/75")}>CUSAT · Information Technology</span></span></Link>
        <nav className="hidden items-center gap-1 xl:flex">{links.map(([label, to]) => <Link key={to} to={to} className="rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-secondary hover:text-foreground" activeProps={{ className: "rounded-full px-3 py-2 text-xs font-semibold text-foreground bg-secondary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" }}>{label}</Link>)}<Button asChild size="sm" variant="gold" className="ml-2"><Link to="/my-sait">My SAIT</Link></Button><Button asChild size="icon" variant="ghost"><Link to="/contact" aria-label="Contact SAIT"><Mail/></Link></Button></nav>
        <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav className="mobile-menu border-t border-border bg-background px-5 py-5 shadow-soft xl:hidden"><div className="mx-auto grid max-w-7xl gap-1">{links.map(([label, to]) => <Link key={to} to={to} className="rounded-xl px-4 py-3 font-medium text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-secondary">{label}</Link>)}<Link to="/contact" className="rounded-xl px-4 py-3 font-medium text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:bg-secondary">Contact</Link><Button asChild variant="gold" className="mt-2"><Link to="/my-sait">Open My SAIT</Link></Button></div></nav>}
    </header>
    <main className="route-page"><Reveal>{children}</Reveal></main>
    <footer className="mt-16 bg-primary px-5 py-14 text-primary-foreground sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><img src={logo} alt="SAIT official logo" className="size-14 rounded-full object-cover"/><p className="mt-4 font-display text-3xl font-semibold">SAIT</p><p className="mt-4 max-w-md text-sm leading-6 text-primary-foreground/60">Students Association of Information Technology, Division of Information Technology, School of Engineering, CUSAT.</p></div><div className="grid grid-cols-2 gap-6 text-sm lg:col-span-4">{links.slice(0,6).map(([l,t]) => <Link key={t} to={t} className="text-primary-foreground/65 hover:text-primary-foreground">{l}</Link>)}</div><div className="lg:col-span-3"><p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">Stay in the loop</p><div className="mt-5 flex gap-2"><Button size="icon" variant="light" aria-label="Instagram"><Instagram/></Button><Button size="icon" variant="light" aria-label="LinkedIn"><Linkedin/></Button><Button asChild size="icon" variant="light"><Link to="/contact" aria-label="Email"><Mail/></Link></Button></div></div></div><div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45 sm:flex-row sm:justify-between"><span>© 2026 SAIT, CUSAT. Demo website.</span><span>Learn · Build · Connect</span></div></footer>
    {scrolled && <Button size="icon" variant="gold" className="fixed bottom-5 right-5 z-40 shadow-medium" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp/></Button>}
  </div>;
}