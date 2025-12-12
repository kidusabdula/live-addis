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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import postsData from "@/data/clean_data.json";

export default function BlogPostPage() {
  const params = useParams();
  const postId = parseInt(params.id as string);

  const post = postsData.find((p) => p.id === postId);

  // Get related posts (posts with similar length/engagement)
  const relatedPosts = postsData
    .filter((p) => p.id !== postId && p.media.length > 0 && p.text.length > 100)
    .slice(0, 3);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button>Return to Blog</Button>
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
      {/* Hero section with image */}
      <section className="relative pt-24 md:pt-32">
        {post.media.length > 0 && (
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <Image
              src={post.media[0].local_path}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}
      </section>

      {/* Content */}
      <section
        className={`${
          post.media.length > 0 ? "-mt-32 relative z-10" : "pt-32"
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
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Title and meta */}
            <div className="premium-card p-8 md:p-12 mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  December 2025
                </span>
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  {post.likes} likes
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#00A896]" />
                  {post.comments} comments
                </span>
                <span className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  {post.shares} shares
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {content.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-muted-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Image Gallery */}
              {post.media.length > 1 && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Photo Gallery</h3>
                  <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={16}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 4000 }}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                    }}
                    className="pb-12"
                  >
                    {post.media.map((media, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                          <Image
                            src={media.local_path}
                            alt={media.ocr_text || `Gallery image ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Original post link */}
              <div className="mt-8 pt-8 border-t">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00A896] hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View original post on Facebook
                </a>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className="text-muted-foreground text-sm">
                Share this story:
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-max px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
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
                      whileHover={{ y: -5 }}
                      className="premium-card h-full"
                    >
                      {relatedPost.media[0] && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={relatedPost.media[0].local_path}
                            alt={relatedPost.text.slice(0, 50)}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                          {relatedPost.text.split("\n")[0].slice(0, 60)}...
                        </h3>
                        <span className="text-[#00A896] text-sm font-medium">
                          Read More →
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
