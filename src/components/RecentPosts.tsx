import React from "react";
import PostCard from "./PostCard";
import { Post } from "@/services/api";
import { dates } from "@/data/dates";
import { categories } from "@/data/categories";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  const visiblePostsMobile = posts.slice(0, 4);
  const nextFour = posts.slice(2, 6);
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-3xl font-bold mb-3"> {t("titles.recent")}</h2>
      <div className="grid grid-cols-2 gap-4">
        {visiblePostsMobile.map((post, index) => (
          <div
            key={post.id}
            className={`col-span-2 ${
              index < 2 ? "md:col-span-1" : "md:hidden"
            }`}
          >
            <PostCard
              post={post}
              key={post.id}
              {...post}
              category={
                categories[Math.floor(Math.random() * categories.length)].name
              }
              date={dates[Math.floor(Math.random() * dates.length)].date}
              variant="default"
            />
          </div>
        ))}

        <div className="col-span-2 rounded-xl overflow-hidden hidden md:block">
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
          <div key={post.id} className="hidden md:block col-span-1">
            <PostCard
              key={post.id}
              post={post}
              {...post}
              category={
                categories[Math.floor(Math.random() * categories.length)].name
              }
              date={dates[Math.floor(Math.random() * dates.length)].date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
