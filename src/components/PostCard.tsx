import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/services/api";
import Tag from "./Tags";
import { useTranslation } from "react-i18next";

type PostCardVariant = "default" | "compact" | "mostRead";

interface PostCardProps {
  post: Post;
  variant?: PostCardVariant;
  category: string;
  date: string;
}

const PostCard = ({
  post,
  variant = "default",
  category,
  date,
}: PostCardProps) => {
  const { id, title, body } = post;
  const { t } = useTranslation();
  return (
    <Link href={{ pathname: `/posts/${id}`, query: { category, date } }}>
      {variant === "compact" && (
        <div className="flex items-center gap-3 cursor-pointer rounded-xl p-2 hover:shadow-lg transition">
          <div className="w-22.5 h-22.5 relative flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${id}/100/100`}
              alt={title}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="text-xl line-clamp-3">{title}</div>
        </div>
      )}

      {variant === "mostRead" && (
        <div className="flex gap-4 rounded-xl pt-4 hover:shadow-lg transition">
          <div className="w-75 h-50 relative flex-shrink-0 rounded-xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${id}/120/120`}
              alt={title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5 h-50">
            <div className="flex items-center gap-5 p-1">
              <Tag key={category} selected={true} onClick={() => {}}>
                {t(`categories.${category}`)}
              </Tag>
              {date && (
                <span className="text-xs">
                  {(() => {
                    const parts = date.split(" ");
                    const month = parts[0];
                    const dayYear = parts.slice(1).join(" ");
                    return `${t(`months.${month}`)} ${dayYear}`;
                  })()}
                </span>
              )}
            </div>
            <div className="font-semibold text-lg line-clamp-2">
              {t(`${title}`)}
            </div>
            <div className="text-xs text-[#a09bb7] line-clamp-2">{body}</div>
          </div>
        </div>
      )}

      {variant === "default" && (
        <>
          <div className="w-full h-50 relative">
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
                <Tag key={category} selected={true} onClick={() => {}}>
                  {t(`categories.${category}`)}
                </Tag>
                {date && (
                <span className="text-xs text-white">
                  {(() => {
                    const parts = date.split(" ");
                    const month = parts[0];
                    const dayYear = parts.slice(1).join(" ");
                    return `${t(`months.${month}`)} ${dayYear}`;
                  })()}
                </span>
              )}
              </div>
            </div>
          </div>
        </>
      )}
    </Link>
  );
};

export default PostCard;
