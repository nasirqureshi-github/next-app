"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tag from "../components/Tag";

const text = `No more clunky workflows or design limits just smooth, focused creation.
Whether you're designing, building, or writing, you need clarity and control.
Empower your ideas with intuitive, elegant support at every step.
Because great work starts with a better way to create.`;

const Introduction = () => {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const words = text.split(" ");

  return (
    <section className="py-20">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag headline="Introducing Layers" />
          </div>
          <div className="text-4xl md:text-6xl text-center font-medium mt-10 leading-relaxed">
            <span className="block mb-4">
              Your creative process desrve better.
            </span>

            <div className="flex flex-wrap justify-center gap-x-2">
              {words.map((word, index) => {
                const wordCount = words.length;
                const start = index / wordCount;
                const end = start + 1 / wordCount;

                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0.1, 1]
                );
                const color = useTransform(
                  scrollYProgress,
                  [start, end],
                  ["#c0c0c0", "#ffffff"]
                );

                return (
                  <motion.span
                    key={index}
                    style={{ opacity, color }}
                    className="transition-all duration-300"
                  >
                    {word + " "}
                  </motion.span>
                );
              })}
            </div>

            <span className="text-lime-400 block mt-6">
              That&apos;s why we build Layers.
            </span>
          </div>
        </div>
        <div className="h-[200vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
