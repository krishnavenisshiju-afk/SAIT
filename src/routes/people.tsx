import { createFileRoute } from "@tanstack/react-router";
import { PeoplePage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/people")({head:()=>pageMeta("People","Meet the faculty mentors and student teams behind SAIT CUSAT."),component:PeoplePage});