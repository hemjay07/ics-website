"use client";
// src/app/page.tsx
import Navigation from "@/components/Home/Navigation";
import Hero from "@/components/Home/Hero";
import Overview from "@/components/Home/Overview";
import LatestCaseStudy from "@/components/Home/latestCaseStudy";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Overview />
      <LatestCaseStudy />

      {/* Additional sections can be added here */}
    </main>
  );
}
