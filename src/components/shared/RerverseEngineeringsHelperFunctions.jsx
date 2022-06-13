import {
  Playlist_AllQueues,
  Playlist_Controller,
  Playlist_CrossPlay,
  Playlist_KBM,
  Playlist_Controller_Playlist_VersionId,
  Playlist_CrossPlay_Playlist_VersionId,
  Playlist_KBM_Playlist_VersionId,
} from './Constants'

export const returnNumber = (value) => {
  const valueToNumber = parseInt(value)
  const finalNumber = Number.isNaN(valueToNumber) ? 0 : valueToNumber
  return finalNumber
}

export const isRankedMatch = (rankedId) => {
  if (
    (rankedId === 'edfef3ac-9cbe-4fa2-b949-8f29deafd483') |
    (rankedId === 'f7f30787-f607-436b-bdec-44c65bc2ecef')
  ) {
    return true
  } else {
    return false
  }
}
// Get Match Que Input
export const getQueInput = (versionId) => {
  if (
    versionId === Playlist_KBM_Playlist_VersionId ||
    versionId === '8003d86f-a331-4c16-b8e4-28d3892a592a' ||
    versionId === '876a8bde-0473-4913-ac79-ba197ab73fcd'
  ) {
    return Playlist_KBM
  } else if (
    versionId === Playlist_Controller_Playlist_VersionId ||
    versionId === '53334757-5b70-4e04-b39a-7652ef5ab932' ||
    versionId === '472fe3f9-60f4-4886-92fe-70366a80a331'
  ) {
    return Playlist_Controller
  } else if (
    versionId === Playlist_CrossPlay_Playlist_VersionId ||
    versionId === 'd8a072fa-fcb8-4f3e-add1-2eaf8d10180c'
  ) {
    return Playlist_CrossPlay
  } else {
    return Playlist_AllQueues
  }
}

export const getMap = (id) => {
  if (id === 'dc3a5b2a-180a-4544-8bc1-ee4ea1338900') {
    return 'Live Fire'
  } else if (id === 'c0264785-90c8-4946-bf16-06dbfd056bff') {
    return 'Recharge'
  } else if (id === '1ddfa173-a544-46e6-9dae-671e7e369a0c') {
    return 'Bazaar'
  } else if (id === '19dfcede-dcd1-45a8-8a77-2b58ce65484f') {
    return 'Streets'
  } else if (id === 'fc878857-e778-4daf-b0ef-5d826b922f3f') {
    return 'Aquarius'
  } else if (id === 'dd94dcba-08e9-477d-91b7-338e889305f3') {
    return 'Catalyst'
  } else if (id === 'd4d880b5-59a2-41bd-9c72-70fde4aaaf35') {
    return 'Breaker'
  } else {
    return 'Undefined'
  }
}

// gets the GameType from the GameVarient ID
export const getGameType = (id) => {
  if (id === 11) {
    return 'Strongholds'
  } else if (id === 6) {
    return 'Slayer'
  } else if (id === 15) {
    return 'CTF'
  } else if (id === 18) {
    return 'OddBall'
  } else if (id === 12) {
    return 'King Of The Hill'
  } else if (id === 7) {
    return 'Last Man Standing'
  } else {
    return 'Undefined'
  }
}

// Checks Win or Loss
export const getOutCome = (num) => {
  if (num === 3 || num === 4) {
    return 'Loss'
  } else if (num === 2 || num === 5) {
    return 'Win'
  } else {
    return 'Unknown'
  }
}

export const getCsrChange = (preMatchCsr, postMatchCsr) => {
  return postMatchCsr - preMatchCsr
}
