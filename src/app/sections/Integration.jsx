
import Tag from "../components/Tag";
 
import IntegrationCol from "../components/IntegrationCol";

const Integration = () => {
  return (
    <section id="integration" className="py-25 overflow-hidden">
    <div className="container px-4">

<div className="grid lg:grid-cols-2 items-center lg:gap-16">
    
    <div>
    <Tag headline="Integration"/>
    <h2 className="text-6xl font-medium mt-6">Plays well with <span className="text-lime-400">others</span></h2>
    <p className="text-white/50 mt-4 text-lg">Layers seamlessly connects with your favorite tool workflow and collaborate across platforms</p>
    </div>

<div>
    <div className="h-[400px] lg:h-[800px] overflow-hidden mt-6 lg:mt-0 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
   <IntegrationCol />
    </div>
</div>

</div>
    </div>
    </section>
  )
}

export default Integration