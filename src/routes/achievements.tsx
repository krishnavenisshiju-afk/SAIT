import { createFileRoute } from "@tanstack/react-router";
import { AchievementsPage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/achievements")({head:()=>pageMeta("Achievements","Celebrate SAIT student awards, research and competition milestones."),component:AchievementsPage});