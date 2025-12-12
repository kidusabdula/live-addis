"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Programs", href: "/about#programs" },
    { label: "Impact", href: "/about#impact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: "/donate" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/www.liveaddis.org",
    label: "Facebook",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative container-max px-4 md:px-6">
        {/* Newsletter Section */}
        <div className="py-12 md:py-16 border-b border-white/10">
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-bold mb-4 text-white flex items-center gap-3"
                >
                  <Mail className="w-8 h-8 text-brand-yellow" />
                  Stay Updated
                </motion.h3>
                <p className="text-white/70 max-w-md text-lg font-light">
                  Subscribe to our newsletter for the latest updates on our
                  programs and impact.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-yellow h-14 rounded-xl text-lg px-6"
                  required
                />
                <Button
                  type="submit"
                  className="bg-brand-yellow hover:bg-white text-brand-navy font-bold px-8 h-14 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-4 mb-8">
              <div className="relative w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center shadow-lg shadow-black/20">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo-1.png"
                    alt="LIVE-ADDIS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight leading-none">
                  LIVE-ADDIS
                </span>
                <span className="text-xs text-brand-yellow tracking-widest uppercase font-medium mt-1">
                  Empowering Youth
                </span>
              </div>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Livelihood Improvement for Vulnerable Ethiopians. Empowering youth
              through skills development, entrepreneurship, and health awareness
              in Addis Ababa.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:info@liveaddis.org"
                className="flex items-center gap-4 text-white/70 hover:text-brand-yellow transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">info@liveaddis.org</span>
              </a>
              <a
                href="tel:+251911123456"
                className="flex items-center gap-4 text-white/70 hover:text-brand-yellow transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+251 911 123 456</span>
              </a>
              <div className="flex items-center gap-4 text-white/70 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Organization
            </h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow transition-colors inline-flex items-center gap-2 group text-sm font-medium"
                  >
                    <span className="w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow transition-colors inline-flex items-center gap-2 group text-sm font-medium"
                  >
                    <span className="w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Connect
            </h4>

            {/* Social Links */}
            <div className="mb-8">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all text-white border border-white/5"
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-yellow transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} LIVE-ADDIS. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5 bg-white/5 px-4 py-2 rounded-full">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />{" "}
            for Ethiopian Youth
          </p>
        </div>
      </div>
    </footer>
  );
}
