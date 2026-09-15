import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementsPage } from "@/components/site/announcements-page";
import { pageMeta } from "@/lib/meta";
export const Route=createFileRoute("/announcements")({head:()=>pageMeta("Announcements","Current SAIT registrations, deadlines and department updates."),component:AnnouncementsPage});