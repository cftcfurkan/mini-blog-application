import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    [t("footer.about"), t("footer.contact"), t("footer.careers")],
    [t("footer.faq"), t("footer.blog"), t("footer.lexicon")],
    [
      t("footer.economic_calendar"),
      t("footer.trading_updates"),
      t("footer.symbols"),
      t("footer.market_hours"),
    ],
    [
      t("footer.privacy_policy"),
      t("footer.terms_conditions"),
      t("footer.cookies_policy"),
    ],
  ];

  const footerLinksMobile = [
    t("footer.economic_calendar"),
    t("footer.trading_updates"),
    t("footer.symbols"),
    t("footer.market_hours"),
    t("footer.privacy_policy"),
    t("footer.terms_conditions"),
    t("footer.cookies_policy"),
  ];

  const socialIcons = [
    { name: t("footer.x"), src: "/icons/x.png" },
    { name: t("footer.instagram"), src: "/icons/instagram.png" },
    { name: t("footer.facebook"), src: "/icons/facebook.png" },
    { name: t("footer.youtube"), src: "/icons/youtube.png" },
    { name: t("footer.linkedin"), src: "/icons/linkedin.png" },
    { name: t("footer.discord"), src: "/icons/discord.png" },
  ];
  const { theme } = useTheme();

  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-[#39305a] w-full mb-8" />
        <div className="grid grid-cols-2 gap-6 md:hidden mb-8">
          <ul className="space-y-4">
            {[
              t("footer.about"),
              t("footer.contact"),
              t("footer.careers"),
              t("footer.faq"),
              t("footer.blog"),
              t("footer.lexicon"),
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
                  style={{
                    backgroundColor: theme !== "dark" ? "black" : "",
                    padding: theme !== "dark" ? "2px" : "",
                    borderRadius: theme !== "dark" ? "50%" : "",
                  }}
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
                  backgroundColor: theme !== "dark" ? "black" : "",
                  padding: theme !== "dark" ? "2px" : "",
                  borderRadius: theme !== "dark" ? "50%" : "",
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

        <hr className="border-[#39305a] mb-2" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 h-50 md:h-auto">
          <div className="flex-1 flex justify-end">
            <span className="ml-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#7F5FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
