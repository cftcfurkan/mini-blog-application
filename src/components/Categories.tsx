import React, { useState } from "react";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import Tag from "./Tags";

const Categories = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([tags[0]]);
  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-3">Categories</h2>
      <ul className="mb-4">
        {categories.map((cat, i) => (
          <li
            key={i}
            className="flex justify-between items-center py-2 border-b border-[#a09bb7]"
          >
            <span className="text-[#fff]">{cat.name}</span>
            <div className="inline-block rounded-xl md:bg-gradient-to-r md:from-[#7F5FFF] md:to-[#01C8FF] p-[2px]">
              <span
                className="block rounded-xl px-4 py-1 text-sm text-white md:hidden"
                style={{ backgroundColor: cat.color }}
              >
                {cat.count}
              </span>
              <span className="hidden md:block bg-[#000000] rounded-xl px-4 py-1 text-sm text-white">
                {cat.count}
              </span>
            </div>
          </li>
        ))}
      </ul>
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
            {tag}
          </Tag>
        ))}
      </div>
    </section>
  );
};

export default Categories;
