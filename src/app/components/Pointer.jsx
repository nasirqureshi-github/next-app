const Pointer = ({name}) => {
  
  return (
    <div className="relative">
      <svg
        fill= "#ffffff"
        height="20px"
        width="20px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 489.8 489.8"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <polygon points="489.8,192.4 0,0 192.4,489.8 237.9,311.4 402.7,476.2 476.2,402.7 311.4,237.9" />
            </g>
          </g>
        </g>
      </svg>
      <div className=" absolute top-full left-full">
    <div className="inline-flex rounded-full font-bold text-sm  px-2 rounded-tl-none bg-blue-500" >{name}</div>
    </div>
    </div>
  )
}

export default Pointer;

   