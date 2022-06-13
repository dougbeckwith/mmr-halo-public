import React from 'react'
import {
  Playlist_AllQueues,
  Playlist_Controller,
  Playlist_CrossPlay,
  Playlist_KBM,
} from './Constants'

const playlistNavbar = ({playlist, updatePlaylist}) => {
  return (
    <div className='w-full sm:pt-5 bg-zinc-800'>
      <div className='w-full pt-2 py-4 container m-auto flex-col flex items-center sm:flex-row flex-wrap sm:justify-around bg-[#1c1d20] rounded-md'>
        <button
          className={
            playlist === Playlist_CrossPlay
              ? 'pt-2 w-max border-b-2 border-[#5e61fa] text-white text-lg'
              : 'pt-2 w-max border-b border-zinc-800 hover:border-b hover:border-[#5e61fa] duration-200 text-white text-lg'
          }
          onClick={(e) => updatePlaylist(e)}>
          Crossplay
        </button>
        <button
          className={
            playlist === Playlist_KBM
              ? 'pt-2 w-max border-b-2 border-[#5e61fa] text-white text-lg'
              : 'pt-2 w-max border-b border-zinc-800 hover:border-b hover:border-[#5e61fa] duration-200 text-white text-lg'
          }
          onClick={(e) => updatePlaylist(e)}>
          Solo Duo KBM
        </button>
        <button
          className={
            playlist === Playlist_Controller
              ? 'pt-2 w-max border-b-2 border-[#5e61fa] text-white text-lg'
              : 'pt-2 w-max border-b border-zinc-800 hover:border-b hover:border-[#5e61fa] duration-200 text-white text-lg'
          }
          onClick={(e) => updatePlaylist(e)}>
          Solo Duo Controller
        </button>
        <button
          className={
            playlist === Playlist_AllQueues
              ? 'pt-2 w-max border-b-2 border-[#5e61fa] text-white text-lg'
              : 'pt-2 w-max border-b border-zinc-800 hover:border-b hover:border-[#5e61fa] duration-200 text-white text-lg'
          }
          onClick={(e) => updatePlaylist(e)}>
          All Queues
        </button>
      </div>
    </div>
  )
}

export default playlistNavbar
