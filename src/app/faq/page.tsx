"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HelpCircle, ChevronRight, Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "About LIVE-ADDIS",
    faqs: [
      {
        question: "What is LIVE-ADDIS?",
        answer:
          "LIVE-ADDIS (Livelihood Improvement for Vulnerable Ethiopians - Addis Ababa) is a non-profit organization dedicated to empowering vulnerable Ethiopian youth through vocational training, entrepreneurship development, and health awareness programs. Founded in 2005, we work to bridge gaps and create opportunities for sustainable livelihoods.",
      },
      {
        question: "What is the APHEET program?",
        answer:
          "APHEET (Alliance for Population, Health and Environment in Ethiopia) is our flagship four-year program funded by the Merck Family Foundation through Karl Kübel Stiftung (KKS) Germany. It integrates Population, Health, and Environment (PHE) approaches with social and economic empowerment initiatives across Guassa, Adaba, and Addis Ababa.",
      },
      {
        question: "Who are your target beneficiaries?",
        answer:
          "We primarily serve unemployed and vulnerable youth in Addis Ababa, specifically in Yeka and LemiKura sub-cities. Our programs target young people who face barriers to employment and need support to develop market-relevant skills and access livelihood opportunities.",
      },
    ],
  },
  {
    title: "Programs & Training",
    faqs: [
      {
        question: "What types of vocational training do you offer?",
        answer:
          "We offer market-driven vocational training at Selam Technical and Vocational College, covering various trades based on labor market demands. Training areas include technical skills, entrepreneurship development, and soft skills that prepare youth for both employment and self-employment opportunities.",
      },
      {
        question: "How long are the training programs?",
        answer:
          "Training duration varies by program and field of study. Our current APHEET program runs for four years (2025-2028), with individual training modules lasting from several weeks to months depending on the vocational track. We ensure trainees complete all requirements before graduation.",
      },
      {
        question: "Is there any cost for participants?",
        answer:
          "Our programs are fully funded by our donors and partners, meaning there is no cost to eligible participants. We cover training fees, learning materials, and provide support services to ensure vulnerable youth can access quality vocational education.",
      },
      {
        question: "What is SRH awareness training?",
        answer:
          "SRH (Sexual and Reproductive Health) awareness is an integral part of our holistic youth development approach. We provide age-appropriate education on reproductive health, family planning, and related topics to promote informed decision-making and overall wellbeing among our trainees.",
      },
    ],
  },
  {
    title: "Getting Involved",
    faqs: [
      {
        question: "How can I apply to become a trainee?",
        answer:
          "Trainees are selected through a community-based process in collaboration with local government offices (Woreda administrations) in our target areas. If you're a resident of Yeka or LemiKura sub-cities and meet the eligibility criteria, contact your local Woreda office or reach out to us directly for upcoming program opportunities.",
      },
      {
        question: "How can I volunteer with LIVE-ADDIS?",
        answer:
          "We welcome volunteers who want to contribute their time and skills! You can support us through mentoring trainees, providing professional expertise, assisting with events, or offering administrative support. Contact us through our website or email to discuss volunteer opportunities that match your interests and availability.",
      },
      {
        question: "Can organizations partner with LIVE-ADDIS?",
        answer:
          "Yes! We actively seek partnerships with NGOs, government agencies, private sector companies, and educational institutions. Partners can collaborate on program implementation, provide technical support, offer apprenticeship opportunities for trainees, or support our initiatives through funding. Contact us to explore partnership possibilities.",
      },
    ],
  },
  {
    title: "Donations & Support",
    faqs: [
      {
        question: "How can I donate to LIVE-ADDIS?",
        answer:
          "You can make a donation through our website's secure donation portal. We accept various payment methods. For larger donations or in-kind contributions, please contact us directly to discuss how your support can best serve our mission.",
      },
      {
        question: "Are donations tax-deductible?",
        answer:
          "LIVE-ADDIS is a registered non-profit organization. Donations may be tax-deductible depending on your country's regulations. We provide donation receipts for all contributions. Please consult with your tax advisor regarding deductibility in your jurisdiction.",
      },
      {
        question: "How are donations used?",
        answer:
          "Donations directly support our programs including vocational training costs, learning materials, trainer fees, SRH awareness workshops, entrepreneurship training, and operational expenses. We maintain transparency in fund utilization and provide regular reports to donors on program impact.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  // Flatten and filter FAQs based on search
  const allFaqs = faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({ ...faq, category: cat.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
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
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
            >
              <HelpCircle className="w-10 h-10 text-[#FFD700]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-[#FFD700]">Questions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Find answers to common questions about our programs, how to get
              involved, and how we&apos;re making a difference.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full focus-visible:ring-[#00A896]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-max px-4 md:px-6">
          {/* Search Results */}
          {filteredFaqs ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-muted-foreground mb-8">
                Showing {filteredFaqs.length} results for &quot;{searchQuery}
                &quot;
              </p>

              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={`search-${index}`}
                        className="premium-card px-6 border-none"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6">
                          <div>
                            <span className="text-xs text-[#00A896] font-medium block mb-1">
                              {faq.category}
                            </span>
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No questions found. Try a different search or browse
                    categories below.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </motion.div>
          ) : (
            /* Category FAQs */
            <div className="max-w-3xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#00A896]/10 flex items-center justify-center text-sm text-[#00A896] font-bold">
                      {catIndex + 1}
                    </span>
                    {category.title}
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: faqIndex * 0.05 }}
                      >
                        <AccordionItem
                          value={`${catIndex}-${faqIndex}`}
                          className="premium-card px-6 border-none"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6 font-semibold">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-8 md:p-12 text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#00A896]/10 flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-[#00A896]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Can&apos;t find what you&apos;re looking for? Our team is here to
              help. Reach out and we&apos;ll get back to you within 24-48 hours.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#00A896] hover:bg-[#00A896]/90 text-white font-semibold rounded-full"
              >
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
