'use client';

import React, { useState } from "react";
import Image from "next/image";
import { tags } from "@/data/tags";
import Tag from "./Tags";
import { useTheme } from "next-themes";
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([tags[0]]);
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="md:mb-6">
      <div className="max-w-7xl mx-auto px-4 md:pb-8 pb-6 flex justify-center">
        <p className="md:text-5xl text-3xl font-bold">{t('common.blog')}</p>
      </div>
      <div className="w-full flex flex-col items-center gap-4 justify-center">
        <div className="relative w-full max-w-5xl">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder={t('common.write_here')}
            className={`
              w-full pl-6 pr-14 py-4
              rounded-xl
              text-white
              placeholder:text-[#5a4a7a]
              border border-[#2a204a]
              outline-none
              focus:ring-0
              text-lg
              transition
              ${theme === 'dark' ? "shadow-[0_4px_20px_2px_rgba(0,0,0,0.4)]" : ""}
            `}
            style={{
              boxShadow: theme === 'dark'
                ? "inset 10px 2px 16px 0 rgba(60,9,108,0.25)"
                : undefined,
            }}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="p-[2px] rounded-full">
              <button
                className="w-9 h-9 flex items-center justify-center"
                tabIndex={-1}
                type="button"
                disabled
              >
                <Image
                  src="/search-refraction.svg"
                  width={30}
                  height={30}
                  alt={t('common.search')}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 w-full justify-start max-w-5xl hidden md:block">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag
                key={tag}
                selected={selectedTags.includes(tag)}
                onClick={() => {
                  setSelectedTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  );
                }}
              >
                {t(`categories.${tag}`)}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
