"use client";

import { HeroUIProvider } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-7xl">
      <HeroUIProvider>
        <h1>HeroUI</h1>
      </HeroUIProvider>
    </div>
  );
}
