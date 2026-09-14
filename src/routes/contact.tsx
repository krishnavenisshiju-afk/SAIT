import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/contact")({head:()=>pageMeta("Contact","Contact SAIT at the School of Engineering, CUSAT."),component:ContactPage});