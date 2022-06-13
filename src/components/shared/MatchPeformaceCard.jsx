const MatchPeformaceCard = ({map, gameType, outCome, csrChange, matchId}) => {
  const handleClick = () => {
    window.open(
      `https://halotracker.com/halo-infinite/match/${matchId}`,
      '_blank'
    )
  }
  const symbol = () => {
    if (csrChange > 0) {
      return '+'
    } else {
      return
    }
  }
  return (
    <div className='w-full rounded-md bg-zinc-900 px-4 py-2'>
      <div className='flex justify-between items-center sm:gap-10 py-2'>
        <h1 className='text-white text-2xl  border-b-2 border-[#5e61fa]'>
          <span className='hidden lg:inline-block'>Match</span> Performance
        </h1>

        <p className='text-white text-xl hidden md:block'>{map}</p>
        <p className='text-white text-xl hidden lg:block'>{gameType}</p>
        <p className='text-white text-xl hidden xl:block'>
          CSR {symbol()}
          {csrChange}
        </p>
        <p className='text-white text-xl hidden md:block'>{outCome}</p>

        <button
          className='duration-300 text-white hover:bg-[#5659fc] bg-[#5e61fa] text-xl rounded-md px-2'
          onClick={handleClick}>
          HaloTracker
        </button>
      </div>
    </div>
  )
}

export default MatchPeformaceCard
