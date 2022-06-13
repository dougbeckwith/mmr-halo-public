interface IData {
  data: IMatchData;
  playlist: string;
}

/** Response data */
export interface IMatchData {
  matchSkillResults: MatchSkillResults;
  matchSummaryResults: MatchSummaryResults;
  xuid: string;
  sortedMatches: SortedMatch[];
}

export interface SortedMatch {
  matchId: string;
  endTime: Date;
}

export interface MatchSkillResults {
  [key: string]: MatchSkillResult;
}

export interface MatchSkillResult {
  value: SkillResult[];
}

export interface SkillResult {
  id: string;
  result: any;
  resultCode: 0;
}

export interface MatchSummaryResults {
  [key: string]: MatchSummaryResult;
}

export interface MatchSummaryResult {
  matchId: string;
  matchInfo: MatchInfo;
  lastTeamId: number;
  outcome: number;
  rank: number;
  presentAtEndOfMatch: boolean;
}
export interface MatchInfo {
  startTime: string;
  endTime: string;
  duration: string;
  lifecycleMode: number;
  gameVariantCategory: number;
  levelId: string;
  mapVariant: AssetIdentifier;
  ugcGameVariant: AssetIdentifier;
  clearanceId: string;
  playlist: AssetIdentifier;
  playlistExperience: number;
  playlistMapModePair: AssetIdentifier;
  seasonId: string;
  playableDuration: string;
  teamsEnabled: boolean;
  teamScoringEnabled: boolean;
}
export interface AssetIdentifier {
  assetKind: number;
  assetId: string;
  versionId: string;
}
