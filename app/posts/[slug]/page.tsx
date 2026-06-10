import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="soft-grid min-h-screen px-6 py-14 text-white">
      <article className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-semibold text-emerald-300 hover:text-emerald-200"
        >
          ← Back to all posts
        </Link>

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-300">
          {post.category}
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>

        <p className="mb-8 text-neutral-400">
          {post.date} • {post.readingTime}
        </p>

        <div className="space-y-5 text-lg leading-8 text-neutral-300">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}