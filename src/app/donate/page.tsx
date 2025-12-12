"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  CreditCard,
  DollarSign,
  Gift,
  CheckCircle,
  Users,
  BookOpen,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const impactItems = [
  {
    icon: BookOpen,
    amount: "$25",
    description: "Provides textbooks and learning materials for one trainee",
  },
  {
    icon: Users,
    amount: "$50",
    description: "Sponsors one week of vocational training",
  },
  {
    icon: Stethoscope,
    amount: "$100",
    description: "Funds SRH awareness workshop for 20 youth",
  },
  {
    icon: Gift,
    amount: "$250",
    description: "Supports a complete entrepreneurship training module",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(50);
  const [customAmount, setCustomAmount] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formatted.slice(0, 19);
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6"
            >
              <Heart className="w-10 h-10 text-[#FFD700]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Donation{" "}
              <span className="text-[#FFD700]">Changes Lives</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Support the APHEET program and help empower vulnerable Ethiopian
              youth with skills, opportunities, and hope for a brighter future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-background">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-sm font-medium mb-4">
              Your Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              See How Your Donation{" "}
              <span className="text-[#00A896]">Helps</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactItems.map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="premium-card p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#00A896]/20 to-[#FFD700]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#00A896]" />
                </div>
                <p className="text-2xl font-bold text-[#FFD700] mb-2">
                  {item.amount}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-muted/30">
        <div className="container-max px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Make a Donation
                </h2>
                <p className="text-muted-foreground">
                  Choose an amount or enter a custom donation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium mb-4">
                    Select Amount
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <motion.button
                        key={amount}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`p-4 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount && !customAmount
                            ? "bg-[#00A896] text-white shadow-lg shadow-[#00A896]/30"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        ${amount}
                      </motion.button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="pl-10 py-6 text-lg"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium">
                    Your Information
                  </label>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="py-6"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-6"
                    required
                  />
                </div>

                {/* Payment Info */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium">
                    Payment Details
                  </label>
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-600 font-medium">
                        Demo Mode
                      </span>
                      No real payment will be processed
                    </p>
                    <div className="space-y-3">
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Card Number"
                          value={cardNumber}
                          onChange={(e) =>
                            setCardNumber(formatCardNumber(e.target.value))
                          }
                          className="pl-10"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          type="text"
                          placeholder="MM/YY"
                          value={expiry}
                          onChange={(e) =>
                            setExpiry(formatExpiry(e.target.value))
                          }
                          maxLength={5}
                          required
                        />
                        <Input
                          type="text"
                          placeholder="CVV"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(
                              e.target.value.replace(/\D/g, "").slice(0, 4)
                            )
                          }
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!finalAmount || isProcessing}
                  className="w-full bg-[#00A896] hover:bg-[#00A896]/90 text-white font-semibold py-6 text-lg rounded-xl"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    `Donate $${finalAmount || 0}`
                  )}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Your donation is tax-deductible. You will receive a receipt via
                email.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
            </div>
            <DialogTitle className="text-center text-2xl">
              Thank You, {name}!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your generous mock donation of{" "}
              <span className="font-semibold text-[#00A896]">
                ${finalAmount}
              </span>{" "}
              will help empower Ethiopian youth through skills development and
              opportunities.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              A confirmation email has been sent to {email}
            </p>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#00A896] hover:bg-[#00A896]/90"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
