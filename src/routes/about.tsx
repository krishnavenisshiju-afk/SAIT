import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/about")({head:()=>pageMeta("About","Meet SAIT, the student community of the Division of Information Technology at CUSAT."),component:AboutPage});