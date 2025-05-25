'use client'
import { motion } from "framer-motion";
const CalltoAction = () => {
  return (
    <section className="py-16 f">
      <div className="overflow-x-clip p-4 flex">
        <motion.div 
        className="flex flex-none gap-16 pr-16 text-7xl font-medium group cursor-pointer"
        animate={{ x:"-50%"}}
        transition={{
          duration:30,
          ease:"linear",
          repeat:Infinity

        }}
        >
          {[...Array(10)].map((_, index) => {
            return (
              <div key={index} className="flex items-center gap-8">
                <span className="text-lime-400">&#10038;</span>
                <span className="group-hover:text-lime-400">Try it for free</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CalltoAction;
