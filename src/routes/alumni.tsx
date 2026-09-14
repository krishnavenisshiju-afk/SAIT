import { createFileRoute } from "@tanstack/react-router";
import { AlumniPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/alumni")({head:()=>pageMeta("Alumni","Stories and journeys from the SAIT alumni community."),component:AlumniPage});