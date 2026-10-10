"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { personal } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-20 border-t border-gray-200 dark:border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        Get in <span className="gradient-text">Touch</span>
      </motion.h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl">
        Have a project in mind or want to collaborate? Drop me a message.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-colors"
          >
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {personal.email}
              </p>
            </div>
          </a>
          <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kota, Rajasthan, India
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3 space-y-4"
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="Your name" />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>
          <Button type="submit" disabled={loading} className="w-full glow">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}