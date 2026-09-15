import { createFileRoute } from "@tanstack/react-router";
import { MySaitPage } from "@/components/site/my-sait-page";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/my-sait")({head:()=>pageMeta("My SAIT","Log student activities, track achievements and view community progress."),component:MySaitPage});