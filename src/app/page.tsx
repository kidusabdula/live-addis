"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Users,
  BookOpen,
  Handshake,
  Heart,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import clean data
import postsData from "@/data/clean_data.json";

// Filter out broken images
const BROKEN_IMAGES = [
  "/images/posts/d374cee7305200ad25c791ea44a95fb7.jpg",
  "/images/posts/f52ff913ef0012107148782b7d65de51.jpg",
];

// Get featured posts (posts with good engagement + valid images)
const featuredPosts = postsData
  .filter(
    (post) =>
      post.media.length > 0 &&
      post.text.length > 100 &&
      !BROKEN_IMAGES.includes(post.media[0].local_path)
  )
  .slice(0, 5);

// Impact stats
const impactStats = [
  { number: "500+", label: "Youth Empowered", icon: Users },
  { number: "20+", label: "Workshops Held", icon: BookOpen },
  { number: "10+", label: "Partner Organizations", icon: Handshake },
  { number: "46", label: "Trainees in 2025", icon: Heart },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const heroY = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        {/* Subtle Radial Background - Reduced Gradient */}
        <div className="absolute inset-0 bg-brand-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 to-transparent opacity-50" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 container-max px-4 md:px-6 py-24 md:py-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white relative z-20 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto lg:mx-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                <span className="text-sm font-medium text-brand-yellow/90 tracking-wide uppercase">
                  Est. 2005
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white"
              >
                Bridging Gaps,{" "}
                <span className="text-brand-yellow">Creating Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Empowering Ethiopian youth through vocational training,
                entrepreneurship, and holistic health awareness for a
                sustainable tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/donate" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-brand-yellow text-brand-navy hover:bg-white border-0 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:translate-y-[-2px] transition-all"
                  >
                    Support Our Mission
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visualization / Right Side - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block h-[500px] w-full"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Orbital System */}
                <div className="relative w-[450px] h-[450px]">
                  {/* Central Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-navy rounded-full flex items-center justify-center border-4 border-white/5 z-20 shadow-2xl">
                    <div className="text-center p-4">
                      <span className="block text-3xl font-bold text-white mb-0.5">
                        20+
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-brand-yellow font-bold">
                        Years
                      </span>
                    </div>
                  </div>

                  {/* Rings */}
                  <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                  <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 right-10 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 w-44"
                  >
                    <div className="bg-brand-yellow/10 p-2 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Skills</h3>
                      <p className="text-[10px] text-white/50">
                        Vocational Training
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [15, -15, 15] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-10 left-0 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 w-44"
                  >
                    <div className="bg-red-500/10 p-2 rounded-lg">
                      <HeartPulse className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Health</h3>
                      <p className="text-[10px] text-white/50">SRH Awareness</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-1/3 -left-10 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3 w-44"
                  >
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      <Briefcase className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Business</h3>
                      <p className="text-[10px] text-white/50">
                        Entrepreneurship
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Impact Stats Section - Flat Background, Stackable */}
      <section className="py-16 bg-brand-navy border-t border-white/5">
        <div className="container-max px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-light/10 flex items-center justify-center text-brand-yellow">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.number}
                </h3>
                <p className="text-sm font-medium text-white/60 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Refined */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative Sidebar Line */}
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-brand-yellow rounded-r-full" />

        <div className="container-max px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-brand-yellow" />
                <span className="text-brand-navy font-bold text-sm tracking-widest uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white mb-8 leading-[1.1]">
                Transforming Lives <br />
                <span className="text-primary-light">Through Empowerment</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-brand-navy font-semibold">
                    LIVE-ADDIS
                  </strong>{" "}
                  creates sustainable pathways for unemployed youth. We
                  don&apos;t just provide training; we build bridges to the
                  labor market through market-driven vocational skills and life
                  coaching.
                </p>
                <p>
                  Our flagship{" "}
                  <span className="text-primary font-semibold">
                    APHEET program
                  </span>{" "}
                  stands apart by integrating health and environmental
                  awareness, ensuring that personal growth fosters community
                  resilience across Addis Ababa.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-brand-navy text-white hover:bg-primary font-semibold rounded-full px-8 py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    Read Our Story <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Logic - Refined Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              {/* Decorative Backdrop */}
              <div className="absolute -inset-4 bg-brand-yellow/10 rounded-[3rem] -z-10 rotate-3" />
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 -rotate-2 scale-105" />

              <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-[2rem] shadow-sm">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <div
                    key={post.id}
                    className={`relative rounded-xl overflow-hidden ${
                      index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={post.media[0]?.local_path}
                      alt="LIVE-ADDIS Impact"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-navy/10 hover:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
                {/* 4th block as a stat card instead of image for variety */}
                <div className="aspect-square bg-brand-navy rounded-xl p-6 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-yellow/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500" />
                  <Heart className="w-8 h-8 text-brand-yellow mb-2 relative z-10" />
                  <span className="text-3xl font-bold relative z-10">15+</span>
                  <span className="text-xs text-white/60 uppercase tracking-wide relative z-10">
                    Districts
                    <br />
                    Reached
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Stories - Slider */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
              Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4">
              Stories of Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow the journey of our trainees and the community impact we
              create together.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16 !px-4"
          >
            {featuredPosts.map((post) => (
              <SwiperSlide key={post.id} className="h-full pb-10">
                <div className="bg-card h-full rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.media[0]?.local_path}
                      alt="Post"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-brand-navy rounded-full">
                      News
                    </div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2 text-brand-navy dark:text-white group-hover:text-primary transition-colors">
                      {post.text.split("\n")[0]}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 grow">
                      {post.text.split("\n").slice(1).join(" ")}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-hover mt-auto"
                    >
                      Read Full Story <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button
                size="lg"
                className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 px-8"
              >
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Flat Colors */}
      <section className="py-24 bg-brand-yellow text-brand-navy">
        <div className="container-max px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-brand-navy/80 mb-10 max-w-2xl mx-auto font-medium">
            Join us in empowering the next generation of Ethiopian leaders and
            changemakers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-brand-navy text-white hover:bg-brand-navy/90 font-bold px-10 py-6 text-lg rounded-full w-full sm:w-auto shadow-xl"
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-brand-navy/30 hover:bg-brand-navy/5 text-brand-navy font-bold px-10 py-6 text-lg rounded-full w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
