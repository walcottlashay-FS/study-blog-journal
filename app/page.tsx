import PostFilter from "@/components/PostFilter";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="soft-grid min-h-screen px-6 py-14 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-emerald-300">
            Lashay&apos;s Study Journal
          </p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
           Learning out loud while building my way into tech.
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral-300">
            A simple static blog built with Next.js to document what I&apos;m learning
            in web development, deployment, GitHub, and building real projects.
          </p>
        </div>

        <PostFilter posts={posts} />
      </section>
    </main>
  );
}