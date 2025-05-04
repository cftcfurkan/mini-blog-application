"use client";

import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import { fetchPosts, Post } from "@/services/api";
import RecentPosts from "@/components/RecentPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import MostReadPosts from "@/components/MostReadPosts";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchBar onSearch={setSearchQuery} />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <RecentPosts posts={filteredPosts} />
          <div className="hidden md:block">
            <FeaturedPosts posts={filteredPosts} />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Categories />
          <MostReadPosts posts={filteredPosts} variant="compact" />
        </div>
      </div>
    </Layout>
  );
}
