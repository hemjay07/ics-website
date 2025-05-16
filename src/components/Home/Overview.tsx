"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; // Optional if not used elsewhere
import LocationDiagram from "./locationDiagram";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

const Overview = () => {
  const OverviewRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: OverviewRef.current,
          start: "top 50%",
        },
      });

      tl.set(".location-text", { opacity: 0 });

      // Fade in the main h2
      tl.from(".overview-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      });

      // Count-up animations
      tl.to(
        ".years-count",
        {
          innerText: 20,
          snap: { innerText: 1 },
          duration: 3,
          ease: "power4.out",
        },
        "<"
      ); // run at same time as previous

      tl.from(
        ".years-div",
        {
          y: 40,
          duration: 2,
          ease: "power4.out",
        },
        "<"
      ); // run at same time as previous

      tl.to(
        ".assets-count-1",
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 4.5,
          ease: "power4.out",
        },
        "<"
      );

      tl.to(
        ".assets-count-2",
        {
          innerText: 100,
          snap: { innerText: 1 },
          duration: 4.5,
          ease: "power4.out",
        },
        "<"
      );
    },
    { scope: OverviewRef }
  );

  useGSAP(() => {
    // Properly select text elements that have the data-location attribute
    // Assuming these are SVG text elements or divs with this attribute
    const texts = gsap.utils.toArray(".location-text");

    if (texts.length === 0) {
      console.warn("No location text elements found");
      return;
    }

    // Set all texts to initially be invisible
    gsap.set(texts, { opacity: 0 });

    // Function to create and start the animation loop
    let currentAnimation: gsap.core.Timeline | null = null;

    const startAnimationLoop = () => {
      // Kill any existing animation to prevent conflicts
      if (currentAnimation) {
        currentAnimation.kill();
      }

      // Create a new timeline
      const loopTL = gsap.timeline({
        repeat: -1,
        defaults: { opacity: 0 },
      });

      // Hide all texts first
      gsap.set(texts, { opacity: 0 });

      // Create animation loop for texts
      texts.forEach((text) => {
        loopTL
          .to(
            text,
            {
              opacity: 1,
              duration: 2,
              // ease: "power2.inOut",
            },
            "+=0.4"
          )
          .to(
            text,
            {
              opacity: 0,
              duration: 0.6,
              ease: "power2.inOut",
            },
            "+=0.8"
          );
      });

      currentAnimation = loopTL;
      return loopTL;
    };

    // Start the animation initially
    startAnimationLoop();

    // Handle hover interactions
    texts.forEach((text) => {
      if (!(text instanceof Element)) return;

      const location = text.getAttribute("data-location");
      if (!location) return;

      const circle = document.querySelector(
        `circle[data-location="${location}"]`
      );

      if (circle) {
        // Variable to track if we're currently hovering
        let isHovering = false;

        circle.addEventListener("mouseenter", () => {
          isHovering = true;

          // Kill the current animation loop
          if (currentAnimation) {
            currentAnimation.kill();
            currentAnimation = null;
          }

          // Hide all texts
          gsap.set(texts, { opacity: 0 });

          // Show only the relevant text
          gsap.to(text, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut",
          });
        });

        circle.addEventListener("mouseleave", () => {
          isHovering = false;

          // Fade out the current text
          gsap.to(text, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
              // Only restart the animation if we're not hovering over any circle
              if (!isHovering) {
                startAnimationLoop();
              }
            },
          });
        });
      }
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex bg-[#DAE7FF]"
      ref={OverviewRef}
    >
      <div className="header max-w-[1520px] w-full mx-auto px-4 lg:px-[3.81rem]">
        <p className="font-bold text-[#173880] text-xl mt-[5.4rem] mb-[4.25rem]">
          Overview
        </p>
        <h2 className="overview-heading text-[2.19rem] font-bold text-[#173880] max-w-[49.6rem] leading-[2.4rem] -tracking-[0.06563rem]">
          With a legacy of delivering robust platforms across Australia and New
          Zealand, ICS helps public agencies escape the high cost and failure
          rate of custom-built systems.
        </h2>

        <div className="relative mt-[9.8rem] mb-[15.5rem] overflow-x-clip">
          <div className="years-div mb-[4.21rem] border-l-[4.5px] border-l-[#0B2E79] pl-6">
            <h2 className=" text-[2.31rem] text-[#173880] font-medium leading-[1] mb-6">
              <span className="years-count">0</span>+ Years
            </h2>
            <p className="font-bold text-sm text-[#173880]">
              of Government-Focused Delivery
            </p>
          </div>

          <div className="years-div mb-[7.02rem] ml-[29.42rem] border-l-[4.5px] border-l-[#0B2E79] pl-6">
            <h2 className="text-[2.313rem] text-[#173880] font-medium leading-[1] mb-6">
              $<span className="assets-count-1">0</span>M+
            </h2>
            <p className="font-bold text-sm text-[#173880]">
              In managed assets
            </p>
          </div>

          <div className="years-div  ml-[7.35rem] border-l-[4.5px] border-l-[#0B2E79] pl-6">
            <h2 className="text-[2.31rem] text-[#173880] font-medium leading-[1] mb-6">
              $<span className="assets-count-2">0</span>M+
            </h2>
            <p className="font-bold text-sm text-[#173880]">
              In managed assets
            </p>
          </div>

          <LocationDiagram />
        </div>
      </div>
    </section>
  );
};

export default Overview;
