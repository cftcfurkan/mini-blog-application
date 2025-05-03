import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/services/api";

interface PostCardProps {
  post: Post;
  small?: boolean;
  category: string;
  date: string;
}

const PostCard = ({ post, small, category, date }: PostCardProps) => {
  const { id, title } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={`
          ${small ? "flex gap-3 items-center p-2" : ""}
          bg-[#181a2a]/90 rounded-xl shadow-md overflow-hidden
          hover:shadow-lg transition-shadow duration-300
          ${small ? "" : "flex flex-col"}
        `}
      >
        <div
          className={
            small ? "w-14 h-14 flex-shrink-0 relative" : "w-full h-60 relative"
          }
        >
          <Image
            src={`https://picsum.photos/seed/${id}/600/300`}
            alt={title}
            fill
            className="object-cover rounded-xl"
            sizes={small ? "56px" : "100vw"}
          />

          {/* Bilgi katmanı */}
          {!small && (
            <div className="absolute pl-5 bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0f1020cc] to-transparent">
              <div className="font-semibold pb-2 text-white text-xs text-base leading-tight line-clamp-2">
                {title}
              </div>
              <div className="flex items-center gap-5 mb-1">
                <div className="p-[1.5px] rounded-full bg-gradient-to-r from-[#7F5FFF] to-[#01C8FF] inline-block">
                  <div className="bg-[#181a2a] rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                    {category}
                  </div>
                </div>
                {date && <span className="text-xs text-[#fff]">{date}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
