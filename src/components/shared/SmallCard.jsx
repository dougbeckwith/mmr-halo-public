const SmallCard = ({icon, title, value, deviation}) => {
  const isDisplayDeviation = () => {
    if (deviation === undefined) {
      return false
    } else {
      return true
    }
  }

  const symbol = (
    <div className='flex'>
      <span className='pl-2 pr-1'>&#177;</span>
    </div>
  )
  return (
    <div className='w-full rounded-md py-3 px-3 mb-2 bg-[#1c1d20] flex items-center'>
      <div>{icon}</div>
      <div className='pl-5'>
        <p className='text-white text-sm'>{title}</p>
        <div className='text-[#5e61fa] text-xl font-bold flex'>
          <span>{value}</span>
          {isDisplayDeviation() && (
            <div className='flex'>
              <span>{symbol}</span>
              <p>{deviation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SmallCard
