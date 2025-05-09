"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { fetchPosts, getPostById } from "@/services/api";
import Tag from "@/components/Tags";
import { useSearchParams, useParams } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import Categories from "@/components/Categories";
import MostReadPosts from "@/components/MostReadPosts";
import useIsMobile from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";

export default function PostPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const id = params.id;
  const category = searchParams.get("category") || "Unknown";
  const date = searchParams.get("date") || "Unknown";
  const formattedDate = date.replace(/\+/g, " ");

  const [post, setPost] = useState<any>(null);
  const [posts, setPosts] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPostById(parseInt(id as string)).then(setPost);
  }, [id]);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (!post || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Layout>
      <>
        <p className="text-4xl w-full font-bold mb-4">
          {t(`${post.title}`)}
        </p>
        <div className="flex justify-start gap-4 items-center mb-4">
          <Tag selected>{t(`categories.${category}`)}</Tag>
          {date && (
            <span className="text-md">
              {(() => {
                const parts = date.split(" ");
                const month = parts[0]; // "Oct"
                const dayYear = parts.slice(1).join(" "); // "05. 2024"
                return `${t(`months.${month}`)} ${dayYear}`;
              })()}
            </span>
          )}
        </div>
        <div className="flex justify-start pl-2 gap-2 items-center mb-4">
          <p className="whitespace-pre-line">{t(`author`)}:</p>
          <p className="text-gray-300 dark:text-gray-600 whitespace-pre-line">
            User123
          </p>
        </div>
        <article className="rounded-lg overflow-hidden">
          <div className="relative h-128 w-full">
            <Image
              src={`https://picsum.photos/seed/${post.id}/800/400`}
              alt={post.id}
              fill
              className="object-cover"
            />
          </div>
        </article>
        <div className="py-6">
          <div className="prose dark:prose-invert max-w-none">
            {Array.from({ length: 3 }).map((_, i) => (
              <React.Fragment key={i}>
                <p>{post.body.repeat(3)}</p>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
      <div className="flex flex-col md:flex-row gap-8">
        <MostReadPosts
          posts={posts}
          variant={isMobile ? "compact" : "mostRead"}
        />
        <Categories />
      </div>
    </Layout>
  );
}
