'use client'
import Image from "next/image"
import { motion } from "framer-motion"
const logos=[
    {name: "quantum", image:"/quantum.svg"},
    {name: "Acme crop", image:"/acme-corp.svg"},
    {name: "Echo Valley", image:"/echo-valley.svg"},
    {name: "Apex", image:"/apex.svg"},
    {name: "pulse", image:"/pulse.svg"},
    {name: "Outside", image:"/outside.svg"},
    {name: "Celesital", image:"/celestial.svg"},
    {name: "Twice", image:"/twice.svg"},

]
const Logos = () => {
  return (
    <section className="py-24 overflow-x-clip">
   <div className="container"> 
    <h3 className="text-center text-white/50 text-xl">Already choose by these market leader</h3>
    {/* <div className="flex overflow-hidden mt-12">
    <motion.div 
    animate={{
      x:"-50%"
    }}
    transition={{
      duration:30,
      ease:"linear",
      repeat:Infinity
    }}
    className="flex flex-none gap-24 pr-24">
     {logos.map((logo)=>{
        return( 
        <Image src={logo.image} key={logo.name}  alt={logo.name} width={130} height={130}/>
    )
     })}
    
    </motion.div>
</div> */}

<div className="flex overflow-hidden mt-12">
  <motion.div 
    animate={{ x: "-50%" }}
    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
    className="flex flex-none gap-24 pr-24"
  >
    {logos.map((logo) => (
      <div key={logo.name} className="flex-none w-[130px] h-[130px]">
        <Image
          src={logo.image}
          alt={logo.name}
          width={130}
          height={130}
          className="object-contain w-full h-full"
        />
      </div>
    ))}
  </motion.div>
</div>

    </div>
    </section>
  )
}

export default Logos
