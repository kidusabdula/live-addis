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
      {
        question: "Where are your main offices located?",
        answer:
          "Our head office is located in Addis Ababa, Ethiopia. We operate primarily in the Yeka and LemiKura sub-cities for our project implementations.",
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 to-transparent opacity-50" />

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 15 }}
              className="w-20 h-20 mx-auto rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(254,245,165,0.2)]"
            >
              <HelpCircle className="w-10 h-10 text-brand-yellow" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/70">
                Questions
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Find answers to common questions about our programs, how to get
              involved, and how we&apos;re making a difference.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 group-focus-within:text-brand-yellow transition-colors" />
              <Input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-14 py-7 bg-white/10 hover:bg-white/15 border-white/10 text-white placeholder:text-white/50 rounded-full focus-visible:ring-brand-yellow focus-visible:border-transparent transition-all shadow-xl backdrop-blur-sm text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container-max px-4 md:px-6">
          {/* Search Results */}
          {filteredFaqs ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-muted-foreground mb-8 text-lg">
                Showing {filteredFaqs.length} results for &quot;
                <span className="font-semibold text-brand-navy dark:text-white">
                  {searchQuery}
                </span>
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
                        className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden px-2 hover:shadow-md transition-all"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-6 px-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-primary font-bold uppercase tracking-wider mb-1">
                              {faq.category}
                            </span>
                            <span className="font-bold text-lg text-brand-navy">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 px-4 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-16 bg-muted/20 rounded-3xl border border-dashed border-border">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    We couldn&apos;t find any questions matching your search.
                    Try different keywords or browse the categories below.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchQuery("")}
                    className="rounded-full px-8 border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </motion.div>
          ) : (
            /* Category FAQs */
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-4 text-brand-navy dark:text-white">
                    <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg text-primary font-bold shadow-sm">
                      {catIndex + 1}
                    </span>
                    {category.title}
                  </h2>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: faqIndex * 0.05 }}
                      >
                        <AccordionItem
                          value={`${catIndex}-${faqIndex}`}
                          className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden px-2 hover:shadow-md transition-all group"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6 px-4 font-semibold text-lg text-brand-navy group-hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6 px-4 text-base leading-relaxed border-t border-border/30 pt-4 mt-2">
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
      <section className="py-20 bg-muted/30 border-t border-border/50">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-navy rounded-[2.5rem] p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 shadow-inner border border-white/10">
                <MessageCircle className="w-10 h-10 text-brand-yellow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Still Have Questions?
              </h2>
              <p className="text-white/70 mb-10 text-lg max-w-2xl mx-auto font-light">
                Can&apos;t find what you&apos;re looking for? Our team is
                available to provide you with the answers you need. Reach out to
                us directly.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-yellow hover:bg-white text-brand-navy font-bold rounded-full px-10 py-7 text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Contact Support
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
