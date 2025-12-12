"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import postsData from "@/data/clean_data.json";

const BROKEN_IMAGES = [
  "/images/posts/d374cee7305200ad25c791ea44a95fb7.jpg",
  "/images/posts/f52ff913ef0012107148782b7d65de51.jpg",
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);

  const post = postsData.find((p) => p.id === postId);

  // Get valid media for this post
  const validMedia = post
    ? post.media.filter((m) => !BROKEN_IMAGES.includes(m.local_path))
    : [];

  // Get related posts (exclude current, exclude broken images)
  const relatedPosts = postsData
    .filter(
      (p) =>
        p.id !== postId &&
        p.media.length > 0 &&
        p.text.length > 100 &&
        !BROKEN_IMAGES.includes(p.media[0].local_path)
    )
    .slice(0, 3);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-brand-navy">
            Post Not Found
          </h1>
          <Link href="/blog">
            <Button className="bg-brand-navy text-white hover:bg-primary rounded-full">
              Return to Blog
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  // Extract title from first line
  const title = post.text.split("\n")[0];
  const content = post.text.split("\n").slice(1).join("\n\n");

  return (
    <>
      {/* Hero section with image or gradient fallback */}
      <section className="relative pt-24 md:pt-32 bg-brand-navy">
        {validMedia.length > 0 ? (
          <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
            <Image
              src={validMedia[0].local_path}
              alt={title.slice(0, 50)}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-brand-navy/20 to-transparent" />
          </div>
        ) : (
          <div className="h-[30vh] md:h-[40vh] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/20 to-transparent flex items-center justify-center">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
              <Image
                src="/logo-1.png"
                alt="LIVE-ADDIS"
                width={60}
                height={60}
                className="opacity-40 grayscale"
              />
            </div>
          </div>
        )}
      </section>

      {/* Content wrapper - Overlaps hero if image exists */}
      <section
        className={`${
          validMedia.length > 0 ? "-mt-24 md:-mt-32 relative z-10" : "pt-8"
        } pb-16 md:pb-24`}
      >
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back button */}
            <Link href="/blog">
              <Button
                variant="ghost"
                className={`mb-6 -ml-2 rounded-full hover:bg-white/10 ${
                  validMedia.length > 0
                    ? "text-white hover:text-white"
                    : "text-brand-navy hover:text-primary"
                }`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Main Card */}
            <div className="bg-background rounded-3xl p-6 md:p-12 border border-border/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-brand-navy dark:text-white relative z-10">
                {title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50 relative z-10">
                <span className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  December 2025
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  {post.likes} likes
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  {post.comments} comments
                </span>
                <span className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  {post.shares} shares
                </span>
              </div>

              {/* Text Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                {content.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="leading-relaxed mb-6"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Image Gallery */}
              {validMedia.length > 1 && (
                <div className="mt-16 bg-muted/30 rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-6 text-brand-navy dark:text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Share2 className="w-4 h-4 text-primary" />
                    </div>
                    Photo Gallery
                  </h3>
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                    }}
                    className="pb-12"
                  >
                    {validMedia.map((media, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-sm group">
                          <Image
                            src={media.local_path}
                            alt={media.ocr_text || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-transparent group-hover:bg-brand-navy/10 transition-colors" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* External Link */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-medium hover:underline p-4 bg-primary/5 rounded-xl w-full justify-center transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View original post on Facebook
                </a>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex flex-col items-center justify-center gap-4 mt-12 mb-20">
              <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                Share this story
              </span>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Twitter className="w-5 h-5 fill-current" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  <Linkedin className="w-5 h-5 fill-current" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container-max px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-brand-navy dark:text-white">
              Related Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-background rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group"
                    >
                      {relatedPost.media[0] ? (
                        <div className="relative aspect-16/10 overflow-hidden bg-muted">
                          <Image
                            src={relatedPost.media[0].local_path}
                            alt={relatedPost.text.slice(0, 50)}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="aspect-16/10 bg-muted flex items-center justify-center">
                          <Image
                            src="/logo-1.png"
                            alt="LIVE-ADDIS"
                            width={50}
                            height={50}
                            className="opacity-40 grayscale"
                          />
                        </div>
                      )}

                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-lg line-clamp-2 mb-3 text-brand-navy dark:text-white group-hover:text-primary transition-colors">
                          {relatedPost.text.split("\n")[0].slice(0, 80)}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                          {relatedPost.text
                            .split("\n")
                            .slice(1)
                            .join(" ")
                            .slice(0, 80)}
                          ...
                        </p>
                        <span className="text-primary text-sm font-semibold mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowLeft className="w-3 h-3 rotate-180" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
