import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/pages";
import { pageMeta } from "@/lib/meta";
export const Route = createFileRoute("/")({ head:()=>pageMeta("Learn. Build. Connect.","The Students Association of Information Technology at CUSAT."), component:HomePage });