import React from "react";
import Image from "next/image";

const footerLinks = [
  ["About us", "Contact us", "Careers"],
  ["FAQ", "Blog", "Lexicon"],
  ["Economic Calendar", "Trading Updates", "Symbols", "Market Hours"],
  ["Privacy Policy", "Terms & Conditions", "Cookies Policy"],
];

const socialIcons = [
  { name: "X", src: "/icons/x.png" },
  { name: "Instagram", src: "/icons/instagram.png" },
  { name: "Facebook", src: "/icons/facebook.png" },
  { name: "YouTube", src: "/icons/youtube.png" },
  { name: "LinkedIn", src: "/icons/linkedin.png" },
  { name: "Discord", src: "/icons/discord.png" },
];

const Footer = () => (
  <footer className="w-full mt-16">
    <hr className="border-[#39305a] mb-8" />
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
        <div className="flex gap-4 items-center md:items-end">
          {socialIcons.map((icon) => (
            <a key={icon.name} href="#" className="text-[#d1cbe9] hover:text-white transition" aria-label={icon.name}>
              <Image src={icon.src} alt={icon.name} width={24} height={24} />
            </a>
          ))}
        </div>
        {footerLinks.map((col, i) => (
          <ul key={i} className="space-y-4">
            {col.map((link) => (
              <li key={link}>
                <a href="#" className="text-[#727581] hover:text-white family font-medium text-base transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <hr className="border-[#39305a] mb-6" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4">
        <div className="flex-1 flex justify-end">
          <svg width="24" height="24" fill="none" stroke="#a09bb7" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 