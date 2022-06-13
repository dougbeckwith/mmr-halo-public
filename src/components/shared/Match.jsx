import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  returnNumber,
  getMap,
  getGameType,
  getOutCome,
  getCsrChange,
} from './RerverseEngineeringsHelperFunctions'
import KillIcon from './KillIcon'
import SmallCard from './SmallCard'
import SkullIcon from './SkullIcon'
import TeamIcon from './TeamIcon'
import CsrIcon from './CsrIcon'
import MatchPeformaceCard from './MatchPeformaceCard'

const Match = ({data}) => {
  const uuid = uuidv4()
  const matchId = data.matchId

  // MMRS
  const teamMmr = returnNumber(data.result.teamMmr)
  const enemyTeamMmr = Object.values(data.result.teamMmrs).filter(x => x !== data.result.teamMmr).map(returnNumber).join(', ')

  // CSR
  const preMatchCsr = returnNumber(data.result.rankRecap.preMatchCsr.value)
  const postMatchCsr = returnNumber(data.result.rankRecap.postMatchCsr.value)
  const csrChange = getCsrChange(preMatchCsr, postMatchCsr)

  // MAP
  const mapId = data.matchInfo.levelId
  const map = getMap(mapId)

  // GAME TYPE
  const gameId = data.matchInfo.gameVariantCategory
  const gameType = getGameType(gameId)

  // WIN LOSS
  const outComeId = data.outcome
  const outCome = getOutCome(outComeId)

  // KILLS
  const kills = data.result.statPerformances.kills.count
  const expectedKills = returnNumber(
    data.result.statPerformances.kills.expected
  )
  const killsDeviation = returnNumber(data.result.statPerformances.kills.stdDev)

  // DEATHS
  const deaths = data.result.statPerformances.deaths.count
  const expectedDeaths = returnNumber(
    data.result.statPerformances.deaths.expected
  )
  const deathsDeviation = returnNumber(
    data.result.statPerformances.deaths.stdDev
  )

  return (
    <div key={uuid} className='pb-5'>
      <div>
        <MatchPeformaceCard
          map={map}
          gameType={gameType}
          outCome={outCome}
          matchId={matchId}
          csrChange={csrChange}
        />
        <div className='flex-col items-center flex sm:flex-row pt-3 sm:gap-2'>
          <SmallCard icon={<TeamIcon />} value={teamMmr} title='Team MMR' />

          <SmallCard
            icon={<TeamIcon />}
            value={enemyTeamMmr}
            title='Enemy MMR'
          />
        </div>
        <div className='flex-col items-center flex sm:flex-row sm:gap-2'>
          <SmallCard icon={<CsrIcon />} value={preMatchCsr} title='Pre CSR' />

          <SmallCard icon={<CsrIcon />} value={postMatchCsr} title='Post CSR' />
        </div>
        <div className='flex-col items-center flex sm:flex-row sm:gap-2'>
          <SmallCard icon={<KillIcon />} value={kills} title='Kills' />

          <SmallCard
            icon={<KillIcon />}
            value={expectedKills}
            deviation={killsDeviation}
            title='Expected Kills'
          />
        </div>
        <div className='flex-col items-center flex sm:flex-row sm:gap-2'>
          <SmallCard icon={<SkullIcon />} value={deaths} title='Deaths' />
          <SmallCard
            icon={<SkullIcon />}
            value={expectedDeaths}
            deviation={deathsDeviation}
            title='Expected Deaths'
          />
        </div>
      </div>
    </div>
  )
}

export default Match
