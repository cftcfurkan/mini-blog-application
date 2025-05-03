import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";
import Image from "next/image";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const firstTwo = posts.slice(0, 2);
  const nextFour = posts.slice(2, 6);

  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-3">Recent post</h2>
      <div className="grid grid-cols-2 gap-4">
        {firstTwo.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            {...post}
            category={
              categories[Math.floor(Math.random() * categories.length)].name
            }
            date={dates[Math.floor(Math.random() * dates.length)].date}
          />
        ))}
        <div className="col-span-2 rounded-xl overflow-hidden">
          <div className="relative w-full aspect-[16/13]">
            <Image
              src="https://picsum.photos/seed/1/1000/1000"
              alt="wide-image"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {nextFour.map((post) => (
          <PostCard
            key={post.id}
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
};

export default RecentPosts;
