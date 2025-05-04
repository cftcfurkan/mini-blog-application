import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const footerLinks = [
  ["About us", "Contact us", "Careers"],
  ["FAQ", "Blog", "Lexicon"],
  ["Economic Calendar", "Trading Updates", "Symbols", "Market Hours"],
  ["Privacy Policy", "Terms & Conditions", "Cookies Policy"],
];

const footerLinksMobile = [
  "Economic Calendar",
  "Trading Updates",
  "Symbols",
  "Market Hours",
  "Privacy Policy",
  "Terms & Conditions",
  "Cookies Policy",
];

const socialIcons = [
  { name: "X", src: "/icons/x.png" },
  { name: "Instagram", src: "/icons/instagram.png" },
  { name: "Facebook", src: "/icons/facebook.png" },
  { name: "YouTube", src: "/icons/youtube.png" },
  { name: "LinkedIn", src: "/icons/linkedin.png" },
  { name: "Discord", src: "/icons/discord.png" },
];

const Footer = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <footer className="w-full mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-[#39305a] w-full mb-8" />
        <div className="grid grid-cols-2 gap-6 md:hidden mb-8">
          <ul className="space-y-4">
            {[
              "About us",
              "Contact us",
              "Careers",
              "FAQ",
              "Blog",
              "Lexicon",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#727581] hover:text-white font-medium text-base transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="space-y-4">
            {footerLinksMobile.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#727581] font-bold text-base transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="col-span-2 flex justify-center pt-4">
            <div className="flex gap-5">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href="#"
                  aria-label={icon.name}
                  className="text-[#d1cbe9] hover:text-white transition"
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="flex gap-4 items-center md:items-end ">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href="#"
                className="text-[#d1cbe9] hover:text-white transition"
                aria-label={icon.name}
                style={{
                  backgroundColor: !isDark ? "black" : "",
                  padding: !isDark ? "2px" : "",
                  borderRadius: !isDark ? "50%" : "",
                }}
              >
                <Image src={icon.src} alt={icon.name} width={24} height={24} />
              </a>
            ))}
          </div>
          {footerLinks.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#727581] hover:text-white font-medium text-base transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <hr className="border-[#39305a] mb-6 " />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 h-50 md:h-auto">
          <div className="flex-1 flex justify-end">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#a09bb7"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
