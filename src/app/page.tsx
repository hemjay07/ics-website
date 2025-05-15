"use client";
// src/app/page.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Overview />

      {/* Additional sections can be added here */}
    </main>
  );
}
