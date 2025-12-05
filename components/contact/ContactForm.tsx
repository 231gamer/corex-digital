"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SuccessModal from "@/components/ui/SuccessModal";


export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setIsSubmitting(false);

    if (!res.ok) {
      if (data.issues) setErrors(data.issues);
      return;
    }

    // SUCCESS
    setOpenSuccess(true);
    setForm({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="
          max-w-xl mx-auto 
          bg-white/10 border border-white/20 
          backdrop-blur-lg rounded-2xl shadow-xl 
          p-6 space-y-4
        "
      >
        {/* FULL NAME */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Full Name
          </label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="
              w-full bg-white/20 text-white
              border border-white/30 rounded-xl
              px-3 py-2 outline-none
              focus:bg-white/30 focus:border-teal-400 
              focus:shadow-lg focus:shadow-teal-500/30
              transition-all
            "
            required
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="
              w-full bg-white/20 text-white
              border border-white/30 rounded-xl
              px-3 py-2 outline-none
              focus:bg-white/30 focus:border-teal-400 
              focus:shadow-lg focus:shadow-teal-500/30
              transition-all
            "
            required
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Subject
          </label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="
              w-full bg-white/20 text-white
              border border-white/30 rounded-xl
              px-3 py-2 outline-none
              focus:bg-white/30 focus:border-teal-400 
              focus:shadow-lg focus:shadow-teal-500/30
              transition-all
            "
            required
          />
          {errors.subject && (
            <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm font-medium mb-1 text-white">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="
              w-full bg-white/20 text-white
              border border-white/30 rounded-xl
              px-3 py-2 outline-none
              focus:bg-white/30 focus:border-teal-400 
              focus:shadow-lg focus:shadow-teal-500/30
              transition-all
            "
            required
          />
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full py-2 rounded-xl
            bg-gradient-to-r from-teal-500 to-teal-700 
            text-white font-semibold
            shadow-lg shadow-teal-500/25
            transition-all hover:scale-[1.03]
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? "Sending…" : "Send Message"}
        </button>
      </form>

      {/* SUCCESS MODAL */}
      <SuccessModal open={openSuccess} onClose={() => setOpenSuccess(false)} />
    </>
  );
}
