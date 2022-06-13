import React from 'react'

const App = () => {
  const handleClick = () => {
    window.location.assign(process.env.REACT_APP_AUTH_URL)
  }

  const blogLink = () => {
    window.open(
      `https://www.halowaypoint.com/news/closer-look-halo-infinites-ranked-experience`,
      '_blank'
    )
  }
  return (
    <>
      <div className='w-full h-screen m-auto bg-zinc-800 text-white pt-[50px] overflow-auto'>
        <div className='flex flex-col items-center m-auto'>
          <h1 className='text-white text-center text-4xl font-bold tracking-wide pb-12'>
            Get internal Halo MMR data
          </h1>
          <div className='p-5 mb-10 w-[400px] sm:w-[500px] shadow-lg bg-[#202125] rounded-md'>
            <h1 className='text-white text-lg pb-5'>
              Easily view 'hidden' MMR information about your the Halo matches.
            </h1>
            <h2 className='text-white text-md pb-5 '>
              Disclaimer: This is very much an alpha - there will be bugs. 343
              might change their internal APIs at any time and break this
              website.
            </h2>
            <button
              className='px-4 py-2 bg-[#5e61fa] rounded-md hover:bg-[#575afa] text-xl w-full'
              onClick={handleClick}>
              Login
            </button>
          </div>
          <div className='mt-25 w-[400px] sm:w-[500px] p-5 shadow-lg bg-[#202125] rounded-md flex-col flex justify-around'>
            <h1 className='text-white text-lg pb-4'>
              What is MMR? See 343's blog post
            </h1>
            <button
              className='d-block ml-1 px-2 w-full py-1 bg-[#5e61fa] rounded-md hover:bg-[#575afa] text-md'
              onClick={blogLink}>
              here
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
