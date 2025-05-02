import { WidgetsGrid } from "@/components";
import React from "react";

export default function MainPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <span>Información General</span>
      <WidgetsGrid />
    </div>
  );
}
