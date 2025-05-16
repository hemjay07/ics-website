"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText"; // Premium GSAP plugin
import Link from "next/link";
import WorkflowDiagram from "../WorkflowDiagram";
import { MagneticButton, RoundedButton } from "./button";
// Register the SplitText plugin
gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      gsap.set(["svg", ".title", ".subtitle", ".button"], { opacity: 1 });
      // gsap.set(["title", ".subtitle"], { yPercent: 100 });

      // Split and animate heading
      new SplitText(".title", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        onSplit: (self) => {
          tl.from(self.lines, {
            duration: 1,
            yPercent: 100,
            stagger: 0.3,
            ease: "power2.out",
          });
        },
      });

      tl.from(
        ".subtitle",
        {
          duration: 0.2,
          opacity: 0,
          ease: "expo.out",
        },
        "-=0.4"
      )
        .from(
          ".button",
          {
            duration: 0.2,
            opacity: 0,
            ease: "expo.out",
          },
          "<"
        )
        .from("path", {
          opacity: 0,
          stagger: 0.02,
          delay: 0.5,
        });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative flex items-center "
      style={{
        backgroundColor: "#0B2E79",
      }}
    >
      <div className="flex mx-auto max-w-[1520px] w-full px-4 lg:px-[3.81rem]">
        {" "}
        {/* SVG Background - Inline */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <svg
            className="w-full h-full opacity-0"
            viewBox="0 0 1512 951"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1605.06 646.618L1423.87 478.15C1417.14 471.895 1408.3 468.419 1399.11 468.419H1327.27C1307.19 468.419 1290.91 452.141 1290.91 432.062V263.901C1290.91 253.111 1286.12 242.879 1277.83 235.971L1233.5 199.033C1226.97 193.588 1218.73 190.606 1210.23 190.606H968.38C958.989 190.606 949.963 186.972 943.191 180.466L810.556 53.0379C786.789 30.2038 803.232 -9.93645 836.188 -9.53417L1630.26 0.158675C1650.16 0.401645 1666.17 16.6067 1666.17 36.513V619.992C1666.17 651.749 1628.31 668.242 1605.06 646.618Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M957.02 491.965C939.946 492.168 923.64 499.09 911.634 511.23L651.057 774.709C610.507 815.711 639.551 885.285 697.218 885.285H1509.5C1545.69 885.285 1574.89 855.699 1574.42 819.515L1572.6 679.742C1572.37 662.529 1565.32 646.11 1552.99 634.095L1420.95 505.401C1408.63 493.398 1392.06 486.771 1374.86 486.977L957.02 491.965Z"
              fill="white"
              fillOpacity="0.05"
              stroke="white"
              strokeOpacity="0.05"
            />
            <path
              d="M-1.67883 496.727C-18.7524 496.93 -35.0584 503.852 -47.065 515.992L-307.642 779.471C-348.192 820.473 -319.148 890.047 -261.48 890.047H616.578C628.752 890.047 636.551 877.091 630.852 866.333L619.394 844.702C617.099 840.368 615.868 835.551 615.804 830.647L613.899 684.504C613.675 667.291 606.623 650.872 594.295 638.857L462.25 510.163C449.934 498.16 433.358 491.533 416.161 491.739L-1.67883 496.727Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M753.616 410.632C743.684 421.86 743.777 438.758 753.832 449.876L823.011 526.363C834.041 538.558 852.923 539.35 864.936 528.122L920.727 475.976C926.178 470.881 933.362 468.047 940.824 468.047H1039.22C1065.04 468.047 1078.34 437.164 1060.6 418.397L920.589 270.265C908.711 257.699 888.612 258.03 877.155 270.981L753.616 410.632Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M1056.24 201.426H974.119C970.989 201.426 969.465 205.249 971.737 207.402L1030.65 263.236C1031.29 263.846 1032.15 264.186 1033.03 264.186H1115.16C1118.29 264.186 1119.81 260.363 1117.54 258.21L1058.62 202.376C1057.98 201.766 1057.13 201.426 1056.24 201.426Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M570.618 517.387H500.637C497.507 517.387 495.983 521.209 498.255 523.362L557.169 579.196C557.812 579.806 558.665 580.146 559.551 580.146H629.532C632.662 580.146 634.186 576.323 631.914 574.17L572.999 518.336C572.356 517.726 571.504 517.387 570.618 517.387Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M1264.13 265.484H1164.53C1157.84 265.484 1152.41 260.058 1152.41 253.365V213.545C1152.41 206.852 1157.84 201.426 1164.53 201.426H1216.43C1219.51 201.426 1222.48 202.601 1224.73 204.712L1270.99 248.171C1275.05 251.985 1275.22 258.377 1271.36 262.399C1269.47 264.37 1266.86 265.484 1264.13 265.484Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M625.234 757.687L625.234 595.443C625.234 591.308 627.343 587.458 630.827 585.231L754.112 506.455C758.126 503.89 763.271 503.914 767.261 506.518L826.478 545.166C832.568 549.141 833.81 557.546 829.131 563.113L711.139 703.49L645.757 766.419C638.058 773.829 625.234 768.373 625.234 757.687Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M533.369 480.514L620.14 388.352C624.48 383.742 631.638 383.25 636.568 387.222L747.207 476.378C753.996 481.849 752.96 492.484 745.242 496.541L684.328 528.569C680.217 530.73 675.232 530.352 671.494 527.595L636.093 501.482C633.939 499.893 631.319 499.062 628.643 499.119L542.449 500.938C531.707 501.165 526.004 488.337 533.369 480.514Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M703.69 420.067L185.355 18.4015C176.225 11.3268 181.228 -3.29689 192.778 -3.29689L745.299 -3.29716C748.767 -3.29716 752.069 -1.8114 754.369 0.784101L917.731 185.125C921.716 189.622 921.804 196.361 917.938 200.961L797.875 343.802L719.517 419.219C715.183 423.391 708.445 423.752 703.69 420.067Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M152.733 462.044L157.506 44.9803C157.621 34.9436 169.189 29.3891 177.093 35.575L607.946 372.749C613.497 377.093 614.184 385.241 609.437 390.453L505.038 505.076C500.964 509.549 494.214 510.332 489.224 506.911L444.768 476.426C442.75 475.042 440.361 474.302 437.914 474.302L164.851 474.302C158.104 474.302 152.656 468.791 152.733 462.044Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M955.419 221.854L934.484 237.62C927.732 242.704 927.069 252.598 933.083 258.538L1127.98 451.026C1130.57 453.586 1134.07 455.022 1137.71 455.022H1185.17H1218.59H1261.44C1269.09 455.022 1275.29 448.821 1275.29 441.172V289.445C1275.29 281.796 1269.09 275.595 1261.44 275.595H1037.34C1033.93 275.595 1030.64 274.334 1028.09 272.053L973.001 222.61C968.075 218.189 960.707 217.872 955.419 221.854Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M1102.1 232.884L1078.72 208.132C1076.64 205.924 1078.2 202.292 1081.24 202.292H1123.13C1134.17 202.292 1143.24 211.005 1143.69 222.036L1143.77 224.096C1144.04 230.59 1141.47 236.878 1136.73 241.328C1132.52 245.281 1126.46 246.615 1120.97 244.825C1113.79 242.485 1107.28 238.371 1102.1 232.884Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M616.471 548.846L593.094 524.094C591.009 521.886 592.574 518.254 595.611 518.254H637.502C648.543 518.254 657.616 526.967 658.063 537.998L658.147 540.058C658.41 546.552 655.839 552.84 651.102 557.29C646.894 561.243 640.833 562.577 635.343 560.787C628.168 558.447 621.653 554.333 616.471 548.846Z"
              fill="white"
              fillOpacity="0.05"
            />
            <path
              d="M141.408 466.739L147.493 -16.2729C147.599 -24.7066 142.133 -32.2009 134.07 -34.6758L-137.253 -117.957C-149.468 -121.707 -161.828 -112.572 -161.828 -99.7937V466.499C-161.828 476.993 -153.321 485.499 -142.828 485.499H122.41C132.81 485.499 141.277 477.138 141.408 466.739Z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
        </div>
        <div className="z-10 mt-28 ">
          <div className="">
            {/* Text Content */}
            <div className="text-white space-y-6">
              <h1 className="title text-4xl max-w-[37rem] md:text-5xl lg:text-[3.44rem] font-bold leading-[3.8rem] opacity-0">
                Powering Government Systems with Precision and Speed
              </h1>

              <p className="subtitle text-lg md:text-[1.125rem] max-w-[22.8rem] text-white/80 opacity-0">
                ICS delivers proven NoCode solutions tailored for government and
                enterprise — streamlining complex workflows, enabling policy
                agility, and supporting mission-critical operations for decades.
              </p>

              <div className="flex gap-7.5 items-center mt-20 opacity-0 button">
                <RoundedButton />
                <MagneticButton
                  href="blank"
                  color="white"
                  text="Our platform"
                />
              </div>
            </div>
          </div>
        </div>
        <WorkflowDiagram />
      </div>
    </section>
  );
};

export default Hero;
