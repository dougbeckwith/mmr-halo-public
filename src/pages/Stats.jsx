import MatchList from '../components/MatchList'
import UserCard from '../components/shared/UserCard'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Graphs from '../components/Graphs'
import Spinner from '../components/shared/Spinner'
import PlaylistNavbar from '../components/shared/PlaylistNavbar'
import {Playlist_CrossPlay} from '../components/shared/Constants'
import Navbar from '../components/shared/Navbar'

const Stats = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [xuidData, setXuidData] = useState(null)

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    const code = params.code

    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}?code=${code}`)
      .then((response) => {
        let matchData = response.data
        // get sorted match ids
        let matchesInSortedOrder = []
        for (var matchId in matchData.matchSummaryResults) {
          matchesInSortedOrder.push({
            matchId: matchId,
            endTime: matchData.matchSummaryResults[matchId].matchInfo.endTime,
          })
        }

        matchesInSortedOrder.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.endTime) - new Date(a.endTime)
        })

        matchData.sortedMatches = matchesInSortedOrder
        setData(matchData)
        setIsLoading(false)
        axios
          .get(
            `https://xbl-api.prouser123.me/profile/settings/xuid/${response.data.xuid}`
          )
          .then((responseXuid) => {
            let xuidDataDic = {}
            for (const item of Object.entries(
              responseXuid.data.profileUsers[0].settings
            )) {
              xuidDataDic[item[1].id] = item[1].value
            }
            setXuidData(xuidDataDic)
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
        window.location.assign(process.env.REACT_APP_AUTH_URL)
      })
  }, [])

  const [playlist, setPlaylist] = useState(Playlist_CrossPlay)

  const updatePlaylist = (e) => {
    setPlaylist(e.target.innerText)
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          {xuidData !== null ? (
            <UserCard data={data} xuidData={xuidData} />
          ) : (
            <div className='w-full pt-[75px] h-[30px] bg-zinc-800'> </div>
          )}
          <PlaylistNavbar playlist={playlist} updatePlaylist={updatePlaylist} />
          <Graphs data={data} playlist={playlist} />
          <MatchList data={data} playlist={playlist} />
        </>
      )}
    </>
  )
}

export default Stats
