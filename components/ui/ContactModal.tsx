"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiMessageCircle, FiInstagram } from "react-icons/fi";
import { useTranslations } from "next-intl";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('contactModal');
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 25 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Header Modal */}
            <div className="mb-8">
              <h2 className="text-3xl font-serif italic text-neutral-900 dark:text-white mb-2">
                {t('title')}
              </h2>
              <p className="text-neutral-600 dark:text-gray-400">
                {t('description')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-2">
              <a
                href="mailto:adibayuluthfiansyah@gmail.com"
                className="flex flex-col items-center justify-center text-center p-5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
              >
                <FiMail className="w-8 h-8 text-indigo-500 mb-3" />
                <span className="font-medium text-neutral-900 dark:text-white">
                  {t('emailLabel')}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t('emailSubtext')}
                </span>
              </a>
              <a
                href="https://wa.me/62895704119180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center p-5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-green-500 dark:hover:border-green-500 hover:shadow-md transition-all group"
              >
                <FiMessageCircle className="w-8 h-8 text-green-500 mb-3" />
                <span className="font-medium text-neutral-900 dark:text-white">
                  {t('whatsappLabel')}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t('whatsappSubtext')}
                </span>
              </a>

              <a
                href="https://instagram.com/adibayuluthfiansyah"
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 flex flex-col items-center justify-center text-center p-5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-pink-500 dark:hover:border-pink-500 hover:shadow-md transition-all group"
              >
                <FiInstagram className="w-8 h-8 text-pink-500 mb-3" />
                <span className="font-medium text-neutral-900 dark:text-white">
                  {t('instagramLabel')}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {t('instagramSubtext')}
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
