"use client";

import { motion } from "framer-motion";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessModal({
  open,
  onClose,
  message = "Your message has been sent successfully.",
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        className="
          bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full
          text-center border border-teal-100
        "
      >
        <h3 className="text-xl font-semibold text-teal-700 mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600 mb-4">
          {message}
        </p>

        <button
          type="button"
          onClick={onClose}
          className="
            px-4 py-2 rounded-xl
            bg-gradient-to-r from-teal-500 to-teal-700
            text-white font-medium
            shadow-md shadow-teal-500/25
            hover:scale-[1.02] transition-transform
          "
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
