"use client";

import Link from "next/link";
import { useState } from "react";
import type { Post } from "@/lib/posts";

type PostFilterProps = {
  posts: Post[];
};

export default function PostFilter({ posts }: PostFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              selectedCategory === category
                ? "bg-emerald-300 text-neutral-950"
                : "border border-white/10 bg-white/5 text-neutral-200 hover:border-emerald-300/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10"
          >
            <p className="mb-3 text-sm text-emerald-300">{post.category}</p>
            <h2 className="mb-3 text-2xl font-bold">{post.title}</h2>
            <p className="mb-4 text-sm text-neutral-400">
              {post.date} • {post.readingTime}
            </p>
            <p className="text-neutral-300">{post.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}