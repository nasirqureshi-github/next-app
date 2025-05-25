"use client";
import Image from "next/image";
import Pointer from "../components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
const Hero = () => {
  
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftDesignScope.current,{y:0, x:0},{duration:0.5}]
    ]);
   
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: [1] }, { duration: 0.5 }],
      [leftPointerScope.current,{y:0, x:-100},{duration:0.5}],
      [leftPointerScope.current,{x:0, y:[0,16,0]},{duration:0.5, ease:"easeInOut"}]
    ])

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 ,delay:1.5}],
      [rightDesignScope.current,{x:0, y:0},{duration:0.5}]
    ]);

    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
      [rightPointerScope.current,{x:175, y:0},{duration:0.5}],
      [rightPointerScope.current,{x:0, y:[0,20,0]},{duration:0.5, ease:"easeInOut"}]
    ])

  }, []);
  return (
    <section className="py-4 pt-40  overflow-x-clip px-2" style={{cursor:'url("/cursor-you.svg"),auto'}}>
     
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{opacity:0,y:100, x:-100}}
          className="absolute -left-16 top-16 hidden lg:block"
          drag
        >
          <Image
            src="/design-example-1.png"
            width={220}
            height={220}
            alt="design-image"
            draggable="false"
          />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{opacity:0, y:100, x:-200}}
          className="absolute left-56 top-80 hidden lg:block"
        >
          <Pointer name="pointer" />
        </motion.div>

       
        <motion.div className="absolute -right-15 -top-4 hidden lg:block"
        ref={rightDesignScope}
        initial={{opacity:0,x:100,y:100}}
        drag
        >
          <Image
            src="/design-example-2.png"
            width={220}
            height={220}
            alt="design-image"
            draggable="false"
          />
        </motion.div>

        <motion.div className="absolute right-80 -top-4 hidden lg:block"
        ref={rightPointerScope}
        initial={{opacity:0, x:275, y:100}}
        >
          <Pointer name="pointer" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex py-1  px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl  lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8">
          With powerful tools and smart creativity, make every design
          effortlessly impactful.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent px-4 outline-none md:flex-1 w-full"
          />
          <button
            type="submit"
            className="border h-12 px-6 font-medium text-black bg-lime-400 border-lime-400 rounded-full cursor-pointer whitespace-nowrap "
          >
            Sign Sup
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
