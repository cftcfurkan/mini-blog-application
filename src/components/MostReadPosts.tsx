import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";

const MostReadPosts = ({ posts }: { posts: Post[] }) => (
  <section>
    <h2 className="text-white text-xl font-bold mb-3">Most read</h2>
    <div className="flex flex-col gap-3">
      {posts
        .sort(() => Math.random() - 0.5) // Rastgele sırala
        .slice(0, 4) // İlk 4 taneyi al
        .map((post) => (
          <PostCard
            post={post}
            {...post}
            category={
              categories[Math.floor(Math.random() * categories.length)].name
            }
            date={dates[Math.floor(Math.random() * dates.length)].date}
            small
          />
        ))}
    </div>
  </section>
);

export default MostReadPosts;
