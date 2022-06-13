import React from 'react';
import LineChart from './shared/LineChart';
import {
  getQueInput,
  returnNumber,
} from './shared/RerverseEngineeringsHelperFunctions';
import {
  Playlist_AllQueues,
  Playlist_Controller,
  Playlist_CrossPlay,
  Playlist_KBM,
} from './shared/Constants';
import { IData } from '@types';

interface IChartData {
  labels: any[];
  datasets: IDataSet[];
}

interface IDataSet {
  label: string;
  data: any;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  fill: boolean;
  tension: number;
}

const Graphs: React.FC<IData> = ({ data, playlist }) => {
  const mmrListAllQueues: number[] = [];
  const csrListAllQueues: number[] = [];
  const dateListAllQueues: any = [];

  const mmrListSoloDuoKbm: number[] = [];
  const enemyMmrListSoloDuoKbm: number[] = [];
  const csrListSoloDuoKbm: any = [];
  const dateListSoloDuoKbm: any = [];

  const mmrListSoloDuoController: number[] = [];
  const enemyMmrListSoloDuoController: number[] = [];
  const csrListSoloDuoController: any = [];
  const dateListSoloDuoController: any = [];

  const mmrListCrossplay: number[] = [];
  const enemyMmrListCrossplay: number[] = [];
  const csrListCrossplay: any = [];
  const dateListCrossplay: any = [];

  for (let sortedMatch of data.sortedMatches) {
    let matchId = sortedMatch.matchId;
    const matchSkillResult = data.matchSkillResults[matchId];
    const matchSummaryResult = data.matchSummaryResults[matchId];
    const inputId = matchSummaryResult.matchInfo.playlist.versionId;
    const inputQue = getQueInput(inputId);

    const mmr = returnNumber(matchSkillResult.value[0].result.teamMmr);
    const enemyMMR = returnNumber(
      matchSkillResult.value[0].result.teamMmr ===
        matchSkillResult.value[0].result.teamMmrs['0']
        ? matchSkillResult.value[0].result.teamMmrs['1']
        : matchSkillResult.value[0].result.teamMmrs['0']
    );

    const csr = matchSkillResult.value[0].result.rankRecap.postMatchCsr.value;
    const date = matchSummaryResult.matchInfo.endTime;

    if (inputQue === Playlist_AllQueues) {
      // mmrListAllQueues.unshift(mmr)
      // csrListAllQueues.unshift(csr)
      // dateListAllQueues.unshift(new Date(date).toLocaleString().slice(0, 9))
    } else if (inputQue === Playlist_KBM) {
      mmrListSoloDuoKbm.unshift(mmr);
      enemyMmrListSoloDuoKbm.unshift(enemyMMR);
      csrListSoloDuoKbm.unshift(csr);
      dateListSoloDuoKbm.unshift(new Date(date).toLocaleString().slice(0, 9));
    } else if (inputQue === Playlist_Controller) {
      mmrListSoloDuoController.unshift(mmr);
      enemyMmrListSoloDuoController.unshift(enemyMMR);
      csrListSoloDuoController.unshift(csr);
      dateListSoloDuoController.unshift(
        new Date(date).toLocaleString().slice(0, 9)
      );
    } else if (inputQue === Playlist_CrossPlay) {
      mmrListCrossplay.unshift(mmr);
      enemyMmrListCrossplay.unshift(enemyMMR);
      csrListCrossplay.unshift(csr);
      dateListCrossplay.unshift(new Date(date).toLocaleString().slice(0, 9));
    }
  }

  const mmrChartData: IChartData = {
    labels: dateListAllQueues,
    datasets: [
      {
        label: 'Your Team MMR',
        data: mmrListAllQueues,
        backgroundColor: '#5e61fa',
        borderColor: '#5e61fa',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'All Queues CSR',
        data: csrListAllQueues,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const soloDuoKbmChartData: IChartData = {
    labels: dateListSoloDuoKbm,
    datasets: [
      {
        label: 'Your Team MMR',
        data: mmrListSoloDuoKbm,
        backgroundColor: '#5e61fa',
        borderColor: '#5e61fa',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Enemy Team MMR',
        data: enemyMmrListSoloDuoKbm,
        backgroundColor: '#f520e7',
        borderColor: '#f520e7',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Solo Duo KBM CSR',
        data: csrListSoloDuoKbm,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const soloDuoControllerChartData: IChartData = {
    labels: dateListSoloDuoController,
    datasets: [
      {
        label: 'Your Team MMR',
        data: mmrListSoloDuoController,
        backgroundColor: '#5e61fa',
        borderColor: '#5e61fa',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Enemy Team MMR',
        data: enemyMmrListSoloDuoController,
        backgroundColor: '#f520e7',
        borderColor: '#f520e7',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Solo Duo Controller CSR',
        data: csrListSoloDuoController,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };
  const crossplayChartData: IChartData = {
    labels: dateListCrossplay,
    datasets: [
      {
        label: 'Your Team MMR',
        data: mmrListCrossplay,
        backgroundColor: '#5e61fa',
        borderColor: '#5e61fa',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Enemy Team MMR',
        data: enemyMmrListCrossplay,
        backgroundColor: '#f520e7',
        borderColor: '#f520e7',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Crossplay CSR',
        data: csrListCrossplay,
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 2,
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const isMatchs = (matchsArray: any[]): boolean => {
    if (matchsArray.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const chartToDisplayOrNoMatchsText = (playlist: string): JSX.Element => {
    if (playlist === Playlist_KBM && isMatchs(mmrListSoloDuoKbm)) {
      return <LineChart chartData={soloDuoKbmChartData} />;
    } else if (
      playlist === Playlist_Controller &&
      isMatchs(mmrListSoloDuoController)
    ) {
      return <LineChart chartData={soloDuoControllerChartData} />;
    } else if (playlist === Playlist_CrossPlay && isMatchs(mmrListCrossplay)) {
      return <LineChart chartData={crossplayChartData} />;
    } else if (playlist === Playlist_AllQueues && isMatchs(mmrListAllQueues)) {
      return <LineChart chartData={mmrChartData} />;
    }

    return <></>;
  };

  return (
    <div className="w-full bg-zinc-800">
      <div className="py-5 m-auto container">
        <div className="pt-5">{chartToDisplayOrNoMatchsText(playlist)}</div>
      </div>
    </div>
  );
};

export default Graphs;
