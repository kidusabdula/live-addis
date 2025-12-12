"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container-max px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1.5 border border-white/20 shadow-lg overflow-hidden flex items-center justify-center transition-colors"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/logo-1.png"
                  alt="LIVE-ADDIS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
            <span
              className={cn(
                "font-bold text-lg md:text-xl hidden sm:block transition-colors tracking-tight",
                isScrolled ? "text-brand-navy dark:text-white" : "text-white"
              )}
            >
              LIVE-ADDIS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  pathname === item.href
                    ? isScrolled
                      ? "text-brand-navy font-bold"
                      : "text-brand-yellow font-bold"
                    : isScrolled
                    ? "text-muted-foreground hover:text-brand-navy"
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={cn(
                      "absolute inset-0 rounded-full",
                      isScrolled ? "bg-white shadow-sm" : "bg-white/10"
                    )}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "rounded-full transition-colors hidden sm:flex",
                  isScrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    : "text-white hover:bg-white/20"
                )}
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}

            {/* CTA Button - Desktop */}
            <Link href="/donate" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-2.5 font-bold rounded-full shadow-lg transition-all border-2",
                  "bg-brand-yellow border-brand-yellow text-brand-navy hover:bg-brand-navy hover:text-brand-yellow hover:border-brand-yellow"
                )}
              >
                Donate Now
              </motion.button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full w-12 h-12",
                    isScrolled
                      ? "text-brand-navy hover:bg-brand-navy/5"
                      : "text-white hover:bg-white/20"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] p-0 border-l border-white/10"
              >
                <div className="flex flex-col h-full bg-background/95 backdrop-blur-xl">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border/50">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3"
                    >
                      <div className="relative w-10 h-10 bg-white rounded-full p-1.5 flex items-center justify-center">
                        <Image
                          src="/logo-1.png"
                          alt="LIVE-ADDIS Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-bold text-lg text-foreground">
                        LIVE-ADDIS
                      </span>
                    </Link>
                  </div>

                  {/* Nav Items */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center px-4 py-4 rounded-xl text-lg font-medium transition-colors",
                              pathname === item.href
                                ? "bg-primary/10 text-primary font-bold"
                                : "hover:bg-muted text-foreground/80 hover:text-primary"
                            )}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t border-border/50">
                    <div className="flex items-center justify-between mb-6 px-2">
                      <span className="text-sm text-muted-foreground">
                        Switch Theme
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="rounded-full"
                      >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      </Button>
                    </div>
                    <Link
                      href="/donate"
                      onClick={() => setIsOpen(false)}
                      className="block w-full"
                    >
                      <Button className="w-full bg-brand-yellow hover:bg-brand-yellow/90 text-brand-navy font-bold py-6 rounded-xl text-lg shadow-lg">
                        Donate Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
