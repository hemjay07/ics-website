import Link from "next/link";

const MagneticButton = ({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}) => {
  console.log(href);
  return (
    <Link
      href={href}
      className={`${
        color === "white" ? "text-white" : "text-[#0B2E79]"
      } flex items-center rounded-md text-[1rem] transition-colors duration-200 ease-in font-bold group `}
    >
      {text}
      <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="14" height="14" rx="7" fill="white" />
          <path
            d="M5.97516 10.583L9.05817 7.5L5.97516 4.41699"
            stroke="#173880"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};

const RoundedButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-white text-[#173880] py-[0.875rem] px-[1.5rem] font-bold rounded-[3.07rem]     hover:bg-white/75"
    >
      Partner with Us
    </Link>
  );
};
export { MagneticButton, RoundedButton };
