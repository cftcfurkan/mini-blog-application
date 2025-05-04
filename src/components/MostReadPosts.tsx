import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";

const MostReadPosts = ({
  posts,
  variant,
}: {
  posts: Post[];
  variant: "mostRead" | "compact";
}) => {
  const limitedPosts = variant === "mostRead" ? posts.slice(0, 3) : posts;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-3">Most read</h2>
      <div
       className={`flex flex-col gap-3 ${
        variant === "compact" ? "max-h-[900px] md:max-h-[1210px] md:overflow-auto overflow-hidden" : ""
      }`}
      >
        {limitedPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            {...post}
            category={
              categories[Math.floor(Math.random() * categories.length)].name
            }
            date={dates[Math.floor(Math.random() * dates.length)].date}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};

export default MostReadPosts;
