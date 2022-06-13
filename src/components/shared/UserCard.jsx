import React from 'react'

const UserCard = ({xuidData}) => {
  return (
    <div className='pb-[50px] pt-[100px] bg-zinc-800 text-white'>
      <div className='px-3 sm:px-0 container m-auto'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='w-[100px] border-gray-100 bg-zinc-900 rounded-full p-2'>
            <img
              className='rounded-full'
              src={xuidData.GameDisplayPicRaw}
              alt=''
            />
          </div>
          <h1 className='text-2xl pl-6'>{xuidData.Gamertag}</h1>
        </div>
      </div>
    </div>
  )
}

export default UserCard
