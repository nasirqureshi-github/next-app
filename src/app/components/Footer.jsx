import Image from "next/image"
const footerLinks =[
  {href:"#", label:"Contact"},
  {href:"#", label:"Privacy Policy"},
  {href:"#", label:"Term & Conditions"},
];

const Footer = () => {
  return (
    <section className="py-16 ">
      <div className="container">
        
        <div className="flex flex-col md:flex-row  items-center md:justify-between gap-6 px-6 ">
          <div>
            <Image src="/logo.svg" width={100} height={100} alt="Layers"/>
          </div>

          <div>
           <nav className="flex gap-6">
            {
              footerLinks.map(link=>{
                return(
              
                 <a key={link.label} href={link.href} className="text-white/50 text-sm">{link.label}</a>
                 
                )
                
              })
            }
           </nav>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Footer;