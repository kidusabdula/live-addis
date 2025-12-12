"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@liveaddis.org",
    href: "mailto:info@liveaddis.org",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+251 911 123 456",
    href: "tel:+251911123456",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.app.goo.gl/EkUUdz9ZW6jiUeHu7?g_st=aw",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Fri: 8:30 AM - 5:30 PM",
    href: null,
  },
];

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 to-transparent opacity-50" />

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <MessageSquare className="w-10 h-10 text-brand-yellow" />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
              <span className="text-sm font-medium text-brand-yellow tracking-wide uppercase">
                Contact Us
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/70">
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Have questions about our programs or want to get involved?
              We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-background">
        <div className="container-max px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="block bg-white p-8 rounded-[2rem] text-center h-full border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <info.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-brand-navy">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {info.value}
                    </p>
                  </a>
                ) : (
                  <div className="bg-white p-8 rounded-[2rem] text-center h-full border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-brand-navy">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {info.value}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-brand-navy to-brand-yellow" />

              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-brand-navy">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within
                  24-48 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-brand-navy">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy ml-1">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="py-6 rounded-xl border-border/80 focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-navy ml-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="py-6 rounded-xl border-border/80 focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy ml-1">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="py-6 rounded-xl border-border/80 focus-visible:ring-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy ml-1">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      className="resize-none rounded-xl border-border/80 focus-visible:ring-primary min-h-[150px]"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-brand-navy hover:bg-primary text-white font-bold py-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              id="map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-border h-full min-h-[500px] relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126101.76419938099!2d38.68213725!3d8.9806034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1639390000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Map overlay with address */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-lg">
                      LIVE-ADDIS Office
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
