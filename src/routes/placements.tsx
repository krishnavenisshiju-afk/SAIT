import { createFileRoute } from "@tanstack/react-router";
import { PlacementsPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/placements")({head:()=>pageMeta("Placements","Career preparation, placement outcomes and resources from SAIT CUSAT."),component:PlacementsPage});