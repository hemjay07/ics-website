"use client";

import localFont from "next/font/local";
import "./globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const helveticaNeue = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeue-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeue-Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const smoothWrapper = useRef(null);
  const smoothContent = useRef(null);

  useGSAP(() => {
    // Only initialize ScrollSmoother after the DOM is ready
    if (smoothWrapper.current && smoothContent.current) {
      ScrollSmoother.create({
        wrapper: smoothWrapper.current,
        content: smoothContent.current,
        smooth: 2,
        effects: true,
      });
    }
  }, []);

  return (
    <html
      lang="en"
      className={`${helveticaNeue.className} ${helveticaNeue.variable}`}
    >
      <body className="font-helvetica-neue">
        <div id="smooth-wrapper" ref={smoothWrapper}>
          <div id="smooth-content" ref={smoothContent}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
