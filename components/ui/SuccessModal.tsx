"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function SuccessModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="
            bg-white/15 border border-white/20 
            backdrop-blur-xl rounded-2xl shadow-2xl 
            p-8 max-w-sm text-center text-white
          "
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl mb-4"
          >
            ✅
          </motion.div>

          <h2 className="text-xl font-bold mb-2">Message Sent!</h2>
          <p className="text-white/80 mb-4">
            Thank you for reaching out. We’ll get back to you shortly.
          </p>

          <button
            onClick={onClose}
            className="
              w-full py-2 rounded-xl
              bg-gradient-to-r from-teal-500 to-teal-700 
              text-white font-semibold
              shadow-lg shadow-teal-500/25
              hover:scale-[1.03] transition-all
            "
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
