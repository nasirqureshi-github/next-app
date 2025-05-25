'use client';

import { useState } from "react";
import Tag from "../components/Tag";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  { question: "What does “impactful design” mean?", answer: "It means creating visually striking designs that leave a lasting impression." },
  { question: "Can I create professional designs without experience?", answer: "Yes, our tools are built for all skill levels, including beginners." },
  { question: "Are the designs mobile-friendly?", answer: "Absolutely, every design is responsive and looks great on all devices." },
  { question: "Do I need extra software to use these tools?", answer: "No, everything works directly in your browser—no downloads needed." },
  { question: "Can I customize templates easily?", answer: "Yes, all templates are fully editable to match your style or brand." }
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 m-6">
      <div className="container">
        <div className="flex justify-center">
          <Tag headline="Faqs" />
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We got <span className="text-lime-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{faq.question}</h3>
                  <div className="text-lime-400">
                    {isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11h16v-2H2v2z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2v8H2v2h8v8h2v-8h8v-2h-8V2h-2z" />
                      </svg>
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto"}}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden mt-4"
                    >
                      <p className="text-white/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
