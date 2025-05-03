import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";

const RecentPosts = ({ posts }: { posts: Post[] }) => (
  <section>
    <h2 className="text-white text-xl font-bold mb-3">Recent post</h2>
    <div className="grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <PostCard
          post={post}
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

export default RecentPosts;
