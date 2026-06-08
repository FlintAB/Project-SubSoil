import { createFileRoute } from "@tanstack/react-router";
import { Scene3DPage } from "../pages/Scene3DPage/Scene3DPage";

export const Route = createFileRoute('/scene3d')({
   component: Scene3DPage,
})