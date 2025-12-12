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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import clean data
import postsData from "@/data/clean_data.json";

// Get featured posts (posts with images and good engagement)
const featuredPosts = postsData
  .filter((post) => post.media.length > 0 && post.text.length > 100)
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container-max px-4 md:px-6 py-32 md:py-40"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                <span className="text-sm font-medium">
                  Empowering Ethiopian Youth Since 2005
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                Bridging Gaps,{" "}
                <span className="text-[#FFD700]">Creating Opportunities</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
              >
                LIVE-ADDIS empowers vulnerable Ethiopian youth through
                vocational training, entrepreneurship development, and health
                awareness programs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/donate">
                  <Button
                    size="lg"
                    className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Support Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image/Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 border-2 border-dashed border-[#FFD700]/30 rounded-full"
                />

                {/* Logo */}
                <div className="absolute inset-16 rounded-full overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <Image
                    src="/logo-2.png"
                    alt="LIVE-ADDIS Logo"
                    width={250}
                    height={250}
                    className="object-contain p-4"
                  />
                </div>

                {/* Floating stats */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 right-8 glass px-4 py-3 rounded-xl"
                >
                  <p className="text-2xl font-bold text-[#FFD700]">500+</p>
                  <p className="text-sm text-white/80">Youth Trained</p>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 left-8 glass px-4 py-3 rounded-xl"
                >
                  <p className="text-2xl font-bold text-[#00A896]">20+</p>
                  <p className="text-sm text-white/80">Years of Impact</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#001F3F] to-background">
        <div className="container-max px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-card group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#00A896]/20 flex items-center justify-center group-hover:bg-[#00A896]/30 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-[#00A896]" />
                </motion.div>
                <motion.p
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="stat-number mb-2"
                >
                  {stat.number}
                </motion.p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-max px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                Transforming Lives Through Empowerment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                LIVE-ADDIS (Livelihood Improvement for Vulnerable Ethiopians) is
                dedicated to equipping unemployed youth with the skills and
                support they need to enter the labor market through vocational
                training, entrepreneurship development, and Sexual and
                Reproductive Health (SRH) awareness.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through our flagship APHEET program, we integrate Population,
                Health, and Environment (PHE) approaches with social and
                economic empowerment initiatives across Addis Ababa.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-[#00A896] hover:bg-[#00A896]/90 text-white font-semibold rounded-full"
                >
                  Discover Our Story
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {featuredPosts.slice(0, 4).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl overflow-hidden ${
                      index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={post.media[0]?.local_path || "/logo-1.png"}
                      alt={post.text.slice(0, 50) || "LIVE-ADDIS Activity"}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD700]/10 text-[#001F3F] dark:text-[#FFD700] text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Stories of <span className="text-[#00A896]">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the transformative journeys of youth empowered through
              our programs.
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {featuredPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="premium-card h-full"
                >
                  {post.media[0] && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.media[0].local_path}
                        alt={post.text.slice(0, 50) || "LIVE-ADDIS Activity"}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                      {post.text.split("\n")[0].slice(0, 80)}
                      {post.text.split("\n")[0].length > 80 ? "..." : ""}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.text.split("\n").slice(1).join(" ").slice(0, 150)}
                      ...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>❤️ {post.likes}</span>
                        <span>💬 {post.comments}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#00A896] font-medium text-sm hover:underline inline-flex items-center gap-1"
                      >
                        Read More
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full">
                View All Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient-reverse" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Us in Creating{" "}
              <span className="text-[#FFD700]">Lasting Change</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Your support empowers vulnerable youth to build sustainable
              livelihoods and transform their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button
                  size="lg"
                  className="bg-[#FFD700] text-[#001F3F] hover:bg-[#FFD700]/90 font-semibold px-10 py-6 text-lg rounded-full shadow-lg"
                >
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-6 text-lg rounded-full"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
