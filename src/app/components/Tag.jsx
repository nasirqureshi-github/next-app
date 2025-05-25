const Tag = ({headline}) => {
  return (
    <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center">
         ⭐ {headline}
    </div>
  )
}

export default Tag