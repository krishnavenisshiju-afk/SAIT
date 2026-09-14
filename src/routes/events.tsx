import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/events")({head:()=>pageMeta("Events","Explore workshops, hackathons and community events from SAIT CUSAT."),component:EventsPage});