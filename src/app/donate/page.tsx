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
  Lock,
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
const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactItems = [
  {
    icon: BookOpen,
    amount: "2,500 ETB",
    description: "Provides textbooks and learning materials for one trainee",
  },
  {
    icon: Users,
    amount: "5,000 ETB",
    description: "Sponsors one week of vocational training",
  },
  {
    icon: Stethoscope,
    amount: "10,000 ETB",
    description: "Funds SRH awareness workshop for 20 youth",
  },
  {
    icon: Gift,
    amount: "25,000 ETB",
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-light/10 to-transparent opacity-50" />

        <div className="relative container-max px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(254,245,165,0.2)]"
            >
              <Heart className="w-8 h-8 text-brand-yellow fill-brand-yellow/20" />
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-light tracking-wide uppercase">
                Support Our Mission
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight text-white">
              Your Donation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-yellow/70">
                Changes Lives
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Support the APHEET program and help empower vulnerable Ethiopian
              youth with skills, opportunities, and hope for a brighter future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-background">
        <div className="container-max px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white">
              See How Your Contribution{" "}
              <span className="text-primary-light">Helps</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {impactItems.map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-[2rem] text-center border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-bold text-brand-navy dark:text-white mb-3">
                  {item.amount}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Donation Form */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border bg-clip-padding shadow-2xl relative overflow-hidden"
            >
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-yellow via-primary to-brand-navy" />

              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-yellow/10 mb-4 text-brand-secondary-dark">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-brand-navy">
                  Make a Donation
                </h2>
                <p className="text-muted-foreground">
                  Choose an amount or enter a custom donation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-brand-navy ml-1">
                    Select Amount (ETB)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
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
                        className={`p-4 rounded-xl font-bold text-lg transition-all border-2 ${
                          selectedAmount === amount && !customAmount
                            ? "bg-brand-yellow border-brand-yellow text-brand-navy shadow-lg shadow-brand-yellow/20"
                            : "bg-background border-border hover:border-brand-yellow/50 hover:bg-muted"
                        }`}
                      >
                        {amount.toLocaleString()}
                      </motion.button>
                    ))}
                  </div>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground group-focus-within:text-brand-navy transition-colors text-sm">
                      ETB
                    </span>
                    <Input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="pl-14 py-7 text-lg rounded-xl border-2 border-border focus-visible:border-brand-navy focus-visible:ring-0 transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Personal Info */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-brand-navy ml-1">
                    Your Information
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="py-6 rounded-xl border-border/80 focus-visible:ring-primary"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-6 rounded-xl border-border/80 focus-visible:ring-primary"
                      required
                    />
                  </div>
                </div>

                {/* Payment Info */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-brand-navy ml-1 flex items-center justify-between">
                    <span>Payment Details</span>
                    <span className="flex items-center text-xs font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      <Lock className="w-3 h-3 mr-1" /> Secure SSL
                    </span>
                  </label>
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border space-y-4">
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        className="pl-12 py-6 bg-white border-border/80"
                        maxLength={19}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) =>
                          setExpiry(formatExpiry(e.target.value))
                        }
                        maxLength={5}
                        className="py-6 bg-white border-border/80"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) =>
                          setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
                        }
                        maxLength={4}
                        className="py-6 bg-white border-border/80"
                        required
                      />
                    </div>
                  </div>
                  <p className="text-xs text-center text-muted-foreground bg-brand-yellow/10 p-2 rounded-lg text-brand-secondary-dark font-medium border border-brand-yellow/20">
                    Demo Mode: No real payment will be processed.
                  </p>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!finalAmount || isProcessing}
                  className="w-full bg-brand-navy hover:bg-primary text-white font-bold py-8 text-xl rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </span>
                  ) : (
                    `Donate ${
                      finalAmount ? finalAmount.toLocaleString() : 0
                    } ETB`
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-border flex justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Mock payment icons */}
                <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                  VISA
                </div>
                <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                  MC
                </div>
                <div className="h-8 w-12 bg-muted rounded flex items-center justify-center text-[10px] font-bold">
                  Telebirr
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
          <div className="bg-brand-navy p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="mx-auto w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4 relative z-10">
              <CheckCircle className="w-10 h-10 text-brand-yellow" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white mb-2 relative z-10">
              Thank You, {name || "Supporter"}!
            </DialogTitle>
            <p className="text-white/70 relative z-10">Donation Successful</p>
          </div>

          <div className="p-8 bg-white text-center">
            <DialogDescription className="text-center text-muted-foreground text-lg mb-6">
              Your generous mock donation of <br />
              <span className="text-4xl font-bold text-brand-navy block mt-2">
                {finalAmount?.toLocaleString()} ETB
              </span>
            </DialogDescription>

            <p className="text-sm text-muted-foreground mb-8 bg-muted p-4 rounded-xl">
              A confirmation email has been sent to{" "}
              <span className="text-brand-navy font-semibold">{email}</span>.
              Your support empowers Ethiopian youth.
            </p>

            <Button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-brand-navy hover:bg-primary text-white rounded-xl py-6 font-bold"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
