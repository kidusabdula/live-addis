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
  GraduationCap,
} from "lucide-react";

// Team members
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy">
        {/* Subtle Background */}
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
                About LIVE-ADDIS
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
              Our Story of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/70">
                Impact
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              Since 2005, we&apos;ve been transforming lives through skills
              development, entrepreneurship, and health awareness programs for
              vulnerable Ethiopian youth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background" id="mission">
        <div className="container-max px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />

              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Target className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-brand-navy dark:text-white relative z-10">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                To equip unemployed and vulnerable youth to enter the labor
                market through market-driven vocational skills development,
                entrepreneurship training, and Sexual and Reproductive Health
                (SRH) awareness, enabling them to generate sustainable income
                and improve their overall wellbeing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />

              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center mb-8 relative z-10 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                <Eye className="w-8 h-8 text-brand-secondary-dark group-hover:text-brand-navy transition-colors" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-brand-navy dark:text-white relative z-10">
                Our Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
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
      <section className="py-24 bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white">
              Our Core <span className="text-primary-light">Values</span>
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
                className="bg-background p-8 rounded-2xl text-center border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/5 flex items-center justify-center mb-6 text-primary">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy dark:text-white">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APHEET Program Section */}
      <section className="py-24 bg-background" id="programs">
        <div className="container-max px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/10 text-brand-secondary-dark text-sm font-bold mb-6">
                OUR FLAGSHIP PROGRAM
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-navy dark:text-white">
                APHEET Program
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The{" "}
                <strong className="text-brand-navy">
                  Alliance for Population, Health, and Environment in Ethiopia
                  (APHEET)
                </strong>{" "}
                is a comprehensive four-year initiative funded by the Merck
                Family Foundation.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "Skills Development",
                    desc: "Vocational training at Selam Technical College",
                    icon: GraduationCap,
                  },
                  {
                    title: "Entrepreneurship",
                    desc: "Business skills for sustainable livelihoods",
                    icon: Target,
                  },
                  {
                    title: "SRH Awareness",
                    desc: "Holistic health education for youth",
                    icon: Heart,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy dark:text-white text-lg textw">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-muted/50 rounded-xl border-l-4 border-brand-yellow">
                <p className="text-sm text-muted-foreground italic">
                  Targeting 46 unemployed, vulnerable youth in Yeka and LemiKura
                  sub-cities in 2025.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[2rem] rotate-3 -z-10" />
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/posts/7d8e3b5b98de8326c20477e117870b5c.jpg"
                  alt="APHEET Program Workshop"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-xs font-bold mb-3 border border-brand-yellow/20">
                    March 2025
                  </div>
                  <h3 className="text-2xl font-bold text-white">
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
        className="py-24 bg-brand-navy text-white overflow-hidden relative"
        id="timeline"
      >
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

        <div className="container-max px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand-yellow font-bold text-sm tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Milestones &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/60">
                Achievements
              </span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-white/10 md:-translate-x-0.5" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-yellow ring-4 ring-brand-navy -translate-x-[7px] md:-translate-x-[7px] z-10 mt-1.5 shadow-[0_0_15px_rgba(254,245,165,0.5)]" />

                  {/* Date (for desktop alternating) */}
                  <div
                    className={`hidden md:block w-1/2 pt-1 ${
                      index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <span className="text-2xl font-bold text-white/90">
                      {event.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`pl-16 md:pl-0 w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                      <div className="md:hidden text-brand-yellow font-bold text-xl mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {event.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
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
      <section className="py-24 bg-background" id="team">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-3 block">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white">
              Leaders Driving <span className="text-primary-light">Change</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
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
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 desaturate-0 group-hover:desaturate-0"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-yellow font-medium text-sm tracking-wide">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-brand-navy hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
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
