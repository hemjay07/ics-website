"use client";

import { useEffect } from "react";

const LatestCaseStudy = () => {
  useEffect(() => {
    const lazyVideos = Array.from(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const video = entry.target as HTMLVideoElement;
              video.autoplay = true;
              video.controls = false;
              video.load();
              lazyVideoObserver.unobserve(video);
            }
          });
        }
      );

      lazyVideos.forEach((video) => lazyVideoObserver.observe(video));
    }
  }, []);

  return (
    <section className="relative w-full bg-red-300 py-11">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-[0.6]"
        preload="none"
        muted
        loop
        playsInline
        poster="/images/case-study-poster.png"
        autoPlay
      >
        <source src="/videos/case-study-video.mp4" type="video/mp4" />
      </video>
      {/* Actual page content above video */}
      <div className="mx-auto max-w-[1520px] w-full px-4 lg:px-[3.81rem] ">
        <div className="relative  p-[1.56rem] z-10 w-[36rem] bg-white h-[50.8rem] rounded-[0.875rem]">
          <div className="mt-[1.44rem] ml-[1.12rem] flex flex-col">
            {" "}
            <div className="self-start mb-[4.31rem]">
              <span className="inline-block px-[0.77856rem]  py-[0.288rem] rounded-full text-[#2F74E3]  border-[2.6px] border-[#2F74E3] text-[1rem]  font-bold">
                Latest Case study
              </span>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-[2.1rem] max-w-[26rem] font-bold text-[#0B2E79] mb-[4.25rem] leading-[2.4rem]">
                NSW Government – Permit Workflow Modernisation
              </h3>
              <p className="text-[#0B2E79] leading-[1.62rem] text-[1.125rem] font-bold max-w-[26rem]  -tracking-[0.03375rem]">
                ICS delivered a permit and licensing system tailored for
                fast-changing policy, with robust back-end workflows and
                seamless public engagement.
              </p>
            </div>
            <div className="mt-[21rem]">
              <a
                href="/case-studies/nsw-permit-workflow"
                className="inline-flex items-center text-[1rem] text-[#0B2E79] font-bold hover:text-blue-700 transition-colors"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCaseStudy;
