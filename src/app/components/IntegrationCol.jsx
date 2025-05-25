
'use client';
import IntegrationConst from "./IntegrationConst";
import Image from "next/image";
import { motion } from "framer-motion";

const IntegrationCol = ({ className = ""}) => {
  return (
    <div className={`flex flex-col gap-4 pb-4 mx-5 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[800px] overflow-hidden">
        {/* Only render 2 columns with different directions */}
        {[false, true].map((isReverse, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col gap-4"
            animate={{
              y: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {/* Duplicate the same content to allow seamless looping */}
            {[...Array(2)].map((_, dupIndex) => (
              <div key={`${colIndex}-${dupIndex}`}>
                {IntegrationConst.map((item, index) => (
                  <div
                    key={`${colIndex}-${dupIndex}-${index}`}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6 mb-4"
                  >
                    <div className="flex justify-center">
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="size-24"
                      />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{item.name}</h3>
                    <p className="text-center text-white/50 mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationCol;
