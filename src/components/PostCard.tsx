import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/services/api";
import Tag from "./Tags";

interface PostCardProps {
  post: Post;
  small?: boolean;
  category: string;
  date: string;
}

const PostCard = ({ post, small, category, date }: PostCardProps) => {
  const { id, title, body } = post;
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={`
      ${small ? "flex gap-3 items-center p-2" : "flex flex-col"}
      bg-[#181a2a]/90 rounded-xl shadow-md overflow-hidden
      hover:shadow-lg transition-shadow duration-300
    `}
      >
        {small ? (
          <>
            <div className="w-25 h-25 flex-shrink-0 relative rounded-xl overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${id}/600/300`}
                alt={title}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="flex-1 text-white text-md line-clamp-3">
              {body}
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-60 relative">
              <Image
                src={`https://picsum.photos/seed/${id}/600/300`}
                alt={title}
                fill
                className="object-cover rounded-xl"
                sizes="100vw"
              />
              <div className="absolute pl-5 bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#0f1020cc] to-transparent">
                <div className="font-semibold pb-2 text-white text-xs text-base leading-tight line-clamp-2">
                  {title}
                </div>
                <div className="flex items-center gap-5">
                  <Tag
                    key={category}
                    selected={true}
                    onClick={() => {}}
                    small={true}
                  >
                    {category}
                  </Tag>
                  {date && <span className="text-xs text-[#fff]">{date}</span>}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default PostCard;
