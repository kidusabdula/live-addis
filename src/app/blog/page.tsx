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
} from "lucide-react";
import { Input } from "@/components/ui/input";

import postsData from "@/data/clean_data.json";

// Filter out posts without substantial content
const blogPosts = postsData.filter(
  (post) =>
    post.text.length > 50 && (post.media.length > 0 || post.text.length > 200)
);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Featured post (the one with most engagement)
  const featuredPost = blogPosts.reduce((prev, current) =>
    prev.likes + prev.comments + prev.shares >
    current.likes + current.comments + current.shares
      ? prev
      : current
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-la-gold/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stories of <span className="text-la-gold">Change</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Explore updates, success stories, and insights from our programs
              transforming lives across Ethiopia.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus-visible:ring-la-teal"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchQuery && (
        <section className="section-padding bg-background">
          <div className="container-max px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-la-gold/10 text-la-navy dark:text-la-gold text-sm font-medium mb-6">
                Featured Story
              </span>

              <Link href={`/blog/${featuredPost.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="premium-card overflow-hidden grid md:grid-cols-2 gap-0"
                >
                  {featuredPost.media[0] && (
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <Image
                        src={featuredPost.media[0].local_path}
                        alt={featuredPost.text.slice(0, 50)}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 line-clamp-2">
                      {featuredPost.text.split("\n")[0].slice(0, 100)}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {featuredPost.text
                        .split("\n")
                        .slice(1)
                        .join(" ")
                        .slice(0, 250)}
                      ...
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        {featuredPost.likes} likes
                      </span>
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-la-teal" />
                        {featuredPost.comments} comments
                      </span>
                    </div>
                    <span className="inline-flex items-center text-la-teal font-medium group">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section
        className={`section-padding ${searchQuery ? "pt-8" : ""} bg-muted/30`}
      >
        <div className="container-max px-4 md:px-6">
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold">All Stories</h2>
            </motion.div>
          )}

          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground mb-8"
            >
              Showing {filteredPosts.length} results for &quot;{searchQuery}
              &quot;
            </motion.p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !searchQuery || post.id !== featuredPost.id)
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
                      whileHover={{ y: -5 }}
                      className="premium-card h-full flex flex-col"
                    >
                      {post.media[0] ? (
                        <div className="relative aspect-16/10 overflow-hidden">
                          <Image
                            src={post.media[0].local_path}
                            alt={post.text.slice(0, 50)}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="aspect-16/10 bg-linear-to-br from-la-navy to-la-teal flex items-center justify-center">
                          <Image
                            src="/logo-1.png"
                            alt="LIVE-ADDIS"
                            width={80}
                            height={80}
                            className="opacity-50"
                          />
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                          {post.text.split("\n")[0].slice(0, 80)}
                          {post.text.split("\n")[0].length > 80 ? "..." : ""}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                          {post.text
                            .split("\n")
                            .slice(1)
                            .join(" ")
                            .slice(0, 150)}
                          ...
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {post.comments}
                            </span>
                          </div>
                          <span className="text-la-teal text-sm font-medium">
                            Read More →
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
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found matching your search.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
