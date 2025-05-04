'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/24x18/gb.png' },
  { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/24x18/tr.png' }
];

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    setMounted(true);
    const detectedLanguage = navigator.language.split('-')[0];
    if (languages.some(lang => lang.code === detectedLanguage)) {
      i18n.changeLanguage(detectedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className="flex items-center px-2 py-1 rounded-lg bg-transparent border-none">
        <div className="w-7 h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse" />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="ml-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#01C8FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 py-1 rounded-lg bg-transparent border-none hover:bg-white/10 transition-colors"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={28}
          height={20}
          className="inline-block rounded-sm border border-white/30"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="ml-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#01C8FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                lang.code === currentLanguage.code ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={15}
                className="rounded-sm border border-white/30"
              />
              <span className="text-sm text-gray-800 dark:text-gray-200">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 