"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Calendar,
  ChevronRight,
  Linkedin,
  Mail,
} from "lucide-react";

// Team members based on Facebook scrape context
const teamMembers = [
  {
    name: "Alemayehu Teshome",
    role: "Founder & Executive Director",
    bio: "Visionary leader who founded LIVE-ADDIS with a passion for empowering Ethiopian youth. Expert in youth development programs and community engagement.",
    image: "/images/posts/63f9c02abd73883af69182d5334d045f.jpg",
  },
  {
    name: "Prof. Wassie Kebede",
    role: "Board Chairperson",
    bio: "Full Professor at Addis Ababa University, providing strategic guidance and academic expertise to shape LIVE-ADDIS's direction.",
    image: "/images/posts/b8df68852b72129888375496e101d922.jpg",
  },
  {
    name: "Dr. Sewale Abate",
    role: "Board Member",
    bio: "Keynote speaker at major workshops, brings valuable perspectives on policy and stakeholder engagement.",
    image: "/images/posts/a37eefafe904c0c157ff0d95d9c9c4f6.jpg",
  },
  {
    name: "W/ro Endanchiyelem Mekonnen",
    role: "Deputy Board Chairperson",
    bio: "Experienced leader in governance and organizational development, instrumental in LIVE-ADDIS's board-led transition.",
    image: "/images/posts/0375c7fe1112d07a3ef412995742d43e.jpg",
  },
  {
    name: "Tatek Dejenie",
    role: "Program Manager",
    bio: "Oversees TVET training programs and stakeholder partnerships. Expert in capacity building and program implementation.",
    image: "/images/posts/fd27879ab3fd091e62655dd00fd2adba.jpg",
  },
  {
    name: "Melat Daniel",
    role: "Community Facilitator",
    bio: "Manages community engagement and authored the APHEET launch report. Passionate about connecting youth with opportunities.",
    image: "/images/posts/7d8e3b5b98de8326c20477e117870b5c.jpg",
  },
];

// Timeline events
const timelineEvents = [
  {
    year: "2005",
    title: "LIVE-ADDIS Founded",
    description:
      "Organization established with a mission to empower vulnerable Ethiopian youth.",
  },
  {
    year: "2024",
    title: "20th General Assembly",
    description:
      "Transition to board-led governance structure for enhanced efficiency.",
  },
  {
    year: "Jan 2025",
    title: "APHEET Program Launch",
    description:
      "Four-year initiative to equip unemployed youth with skills and SRH awareness.",
  },
  {
    year: "Mar 2025",
    title: "Project Launch Workshop",
    description:
      "Official launch of skills development program at Azzeman Hotel.",
  },
  {
    year: "Jun 2025",
    title: "Pre-Service Orientation",
    description:
      "Vocational training kickoff at Selam Technical College for 46 youth.",
  },
  {
    year: "Sep 2025",
    title: "3rd APHEET Steering Committee",
    description:
      "Joint Review Workshop at Bishoftu Pyramid Hotel with all partners.",
  },
  {
    year: "Dec 2025",
    title: "Stakeholder Review",
    description:
      "Comprehensive review workshop at Bellevue Hotel with key stakeholders.",
  },
];

const values = [
  {
    icon: Target,
    title: "Empowerment",
    description:
      "Equipping youth with skills and confidence to build sustainable livelihoods.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Building strong partnerships with government, NGOs, and communities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering high-quality programs that create lasting, measurable impact.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Serving vulnerable populations with dignity, respect, and understanding.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
              About LIVE-ADDIS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story of <span className="text-[#FFD700]">Impact</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Since 2005, we&apos;ve been transforming lives through skills
              development, entrepreneurship, and health awareness programs for
              vulnerable Ethiopian youth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background" id="mission">
        <div className="container-max px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00A896]/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#00A896]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To equip unemployed and vulnerable youth to enter the labor
                market through market-driven vocational skills development,
                entrepreneurship training, and Sexual and Reproductive Health
                (SRH) awareness, enabling them to generate sustainable income
                and improve their overall wellbeing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 md:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#FFD700]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A society where every Ethiopian youth, regardless of their
                background, has access to quality education, skills training,
                and opportunities for sustainable socio-economic empowerment and
                community development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-sm font-medium mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Core <span className="text-[#00A896]">Values</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="premium-card p-6 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#00A896]/20 to-[#001F3F]/20 flex items-center justify-center mb-4"
                >
                  <value.icon className="w-8 h-8 text-[#00A896]" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APHEET Program Section */}
      <section className="section-padding bg-background" id="programs">
        <div className="container-max px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFD700]/10 text-[#001F3F] dark:text-[#FFD700] text-sm font-medium mb-4">
                Our Flagship Program
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                APHEET Program
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The{" "}
                <strong>
                  Alliance for Population, Health, and Environment in Ethiopia
                  (APHEET)
                </strong>
                is a comprehensive four-year initiative funded by the Merck
                Family Foundation through Karl Kübel Stiftung für Kind und
                Familie (KKS) Germany.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#00A896] mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Skills Development:</strong> Market-driven
                    vocational training at Selam Technical and Vocational
                    College
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#00A896] mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Entrepreneurship:</strong> Business skills and
                    self-employment preparation for sustainable livelihoods
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#00A896] mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>SRH Awareness:</strong> Sexual and Reproductive
                    Health education for holistic youth development
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Operating across Yeka and LemiKura sub-cities of Addis Ababa,
                targeting 46 unemployed, vulnerable youth in 2025.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/posts/7d8e3b5b98de8326c20477e117870b5c.jpg"
                  alt="APHEET Program Workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium text-[#FFD700]">
                    March 2025
                  </p>
                  <h3 className="text-xl font-bold">
                    APHEET Project Launch Workshop
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-padding bg-[#001F3F] text-white"
        id="timeline"
      >
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Milestones & <span className="text-[#FFD700]">Achievements</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 md:-translate-x-0.5" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#00A896] border-4 border-[#001F3F] -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="glass p-6 rounded-2xl">
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                        {index % 2 !== 0 && (
                          <Calendar className="w-4 h-4 text-[#FFD700] md:hidden" />
                        )}
                        <span className="text-[#FFD700] font-semibold">
                          {event.year}
                        </span>
                        {index % 2 === 0 && (
                          <Calendar className="w-4 h-4 text-[#FFD700] hidden md:block" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                      <p className="text-white/70 text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background" id="team">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-sm font-medium mb-4">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Leaders Driving <span className="text-[#00A896]">Change</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings together expertise in education,
              community development, and organizational leadership.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="premium-card group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#FFD700] text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-[#00A896] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-[#00A896] hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
