"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Heart,
  MessageCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import postsData from "@/data/clean_data.json";

const BROKEN_IMAGES = [
  "/images/posts/d374cee7305200ad25c791ea44a95fb7.jpg",
  "/images/posts/f52ff913ef0012107148782b7d65de51.jpg",
];

// Filter out posts without substantial content and broken images
const blogPosts = postsData.filter(
  (post) =>
    post.text.length > 50 &&
    (post.media.length > 0 || post.text.length > 200) &&
    (post.media.length === 0 ||
      !BROKEN_IMAGES.includes(post.media[0].local_path))
);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Featured post (the one with most engagement)
  // Ensure we have at least one post, otherwise fallback or handle empty
  const featuredPost =
    blogPosts.length > 0
      ? blogPosts.reduce((prev, current) =>
          prev.likes + prev.comments + prev.shares >
          current.likes + current.comments + current.shares
            ? prev
            : current
        )
      : null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 to-transparent opacity-50" />

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-sm font-medium text-brand-yellow tracking-wide uppercase">
                Our Blog
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
              Stories of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/70">
                Change
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Explore updates, success stories, and insights from our programs
              transforming lives across Ethiopia.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-brand-yellow transition-colors" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 py-7 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-full focus-visible:ring-brand-yellow focus-visible:bg-white/10 shadow-lg text-lg transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchQuery && featuredPost && (
        <section className="py-20 bg-background">
          <div className="container-max px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-brand-navy font-bold text-sm tracking-widest uppercase">
                  Featured Story
                </span>
              </div>

              <Link href={`/blog/${featuredPost.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl overflow-hidden grid md:grid-cols-2 gap-0 border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  {featuredPost.media[0] ? (
                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                      <Image
                        src={featuredPost.media[0].local_path}
                        alt={featuredPost.text.slice(0, 50)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  ) : (
                    <div className="bg-muted flex items-center justify-center">
                      <Image
                        src="/logo-1.png"
                        alt="LIVE-ADDIS"
                        width={120}
                        height={120}
                        className="opacity-20"
                      />
                    </div>
                  )}

                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-yellow/10 text-brand-secondary-dark text-xs font-bold">
                        Impact Story
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 line-clamp-2 text-brand-navy dark:text-white group-hover:text-primary transition-colors">
                      {featuredPost.text.split("\n")[0].slice(0, 100)}
                    </h2>
                    <p className="text-muted-foreground mb-8 line-clamp-3 text-lg leading-relaxed">
                      {featuredPost.text
                        .split("\n")
                        .slice(1)
                        .join(" ")
                        .slice(0, 250)}
                      ...
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        {featuredPost.likes} likes
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        {featuredPost.comments} comments
                      </span>
                    </div>
                    <span className="inline-flex items-center text-primary font-bold group/btn">
                      Read Full Story
                      <div className="ml-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className={`py-20 ${searchQuery ? "pt-8" : ""} bg-muted/30`}>
        <div className="container-max px-4 md:px-6">
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-navy dark:text-white">
                All Stories
              </h2>
            </motion.div>
          )}

          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground mb-8 text-lg"
            >
              Showing results for{" "}
              <span className="font-semibold text-brand-navy">
                &quot;{searchQuery}&quot;
              </span>
            </motion.p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(
                (post) =>
                  !searchQuery || (featuredPost && post.id !== featuredPost.id)
              )
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group bg-white h-full flex flex-col rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                    >
                      {post.media[0] ? (
                        <div className="relative aspect-16/10 overflow-hidden bg-muted">
                          <Image
                            src={post.media[0].local_path}
                            alt={post.text.slice(0, 50)}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy shadow-sm">
                            News
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-16/10 bg-linear-to-br from-brand-navy/5 to-primary/5 flex items-center justify-center">
                          <Image
                            src="/logo-1.png"
                            alt="LIVE-ADDIS"
                            width={80}
                            height={80}
                            className="opacity-40 grayscale"
                          />
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-bold text-lg mb-3 line-clamp-2 text-brand-navy dark:text-white group-hover:text-primary transition-colors">
                          {post.text.split("\n")[0].slice(0, 80)}
                          {post.text.split("\n")[0].length > 80 ? "..." : ""}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                          {post.text
                            .split("\n")
                            .slice(1)
                            .join(" ")
                            .slice(0, 150)}
                          ...
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Heart className="w-3.5 h-3.5" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MessageCircle className="w-3.5 h-3.5" />
                              {post.comments}
                            </span>
                          </div>
                          <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl border border-dashed border-border"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                No stories found
              </h3>
              <p className="text-muted-foreground">
                Try searching for something else.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
