import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => (
  <section>
    <h2 className="text-white text-3xl font-bold mb-3">Featured post</h2>
    <div className="grid grid-cols-3 gap-4">
    {posts
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((post) => (
          <PostCard
            post={post}
            key={post.id}
            variant="default"
            {...post}
            category={
              categories[Math.floor(Math.random() * categories.length)].name
            }
            date={dates[Math.floor(Math.random() * dates.length)].date}
          />
        ))}
    </div>
  </section>
);

export default FeaturedPosts;
