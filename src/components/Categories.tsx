import React from "react";
import { categories, tags } from "@/data/categories";

const Categories = () => (
  <section>
    <h2 className="text-white text-xl font-bold mb-3">Categories</h2>
    <ul className="mb-4">
      {categories.map((cat, i) => (
        <li key={i} className="flex justify-between items-center py-1">
          <span className="text-[#a09bb7]">{cat.name}</span>
          <span className="bg-[#23244a] text-white text-xs px-2 py-0.5 rounded">
            {cat.count}
          </span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 rounded-full border border-[#3C096C] text-[#a09bb7] text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  </section>
);

export default Categories;
