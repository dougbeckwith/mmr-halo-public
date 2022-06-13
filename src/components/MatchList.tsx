import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getQueInput } from './shared/RerverseEngineeringsHelperFunctions'
import Match from './shared/Match'
import { Playlist_Controller, Playlist_CrossPlay, Playlist_KBM } from './shared/Constants'
import NoMatchs from './shared/NoMatchs'
import { IData } from '@types'

const MatchList:React.FC<IData> = ({ data, playlist }) => {
  const mmrData = data

  const returnCurrentMatchArray: any = (playlist: string) => {
    if (playlist === Playlist_CrossPlay) {
      return crossplayMatches
    } else if (playlist === Playlist_KBM) {
      return soloDuoKbmMatches
    } else if (playlist === Playlist_Controller) {
      return soloDuoControllerMatches
    } else {
      return allQueuesMatches
    }
  }

  const crossplayMatches: any = []
  const soloDuoKbmMatches: any = []
  const soloDuoControllerMatches: any = []
  const allQueuesMatches: any = []

  for (let sortedMatch of mmrData.sortedMatches) {
    let matchId = sortedMatch.matchId
    const matchSkillResult = data.matchSkillResults[matchId]
    const matchSummaryResult = data.matchSummaryResults[matchId]

    //const playlistId = matchSummaryResult.matchInfo.playlist.assetId

    const inputId = matchSummaryResult.matchInfo.playlist.versionId
    const inputQue = getQueInput(inputId)

    allQueuesMatches.push({
      ...matchSkillResult.value[0],
      ...matchSummaryResult,
    })

    if (inputQue === Playlist_KBM) {
      soloDuoKbmMatches.push({
        ...matchSkillResult.value[0],
        ...matchSummaryResult,
      })
    } else if (inputQue === Playlist_Controller) {
      soloDuoControllerMatches.push({
        ...matchSkillResult.value[0],
        ...matchSummaryResult,
      })
    } else if (inputQue === Playlist_CrossPlay) {
      crossplayMatches.push({
        ...matchSkillResult.value[0],
        ...matchSummaryResult,
      })
    }
  }

const currentMatchList = returnCurrentMatchArray(playlist)

const matches = currentMatchList.map((match: any) => {
  const id = uuidv4()
  return <Match key={id} data={match} />
})

return (
  <div className='w-full bg-zinc-800'>
    <div className='px-3 sm:px-0 container m-auto pt-4'>{matches.length === 0 ? <NoMatchs /> :  matches}</div>
  </div>
)
}

export default MatchList
