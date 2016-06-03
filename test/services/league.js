import test from 'ava';
import {
  noop,
  client,
  shouldCallUrlMatching,
} from './_serviceHelper';

test('getLeaguesBySummonerIds', t => {
  client.league.getLeaguesBySummonerIds({ summonerIds: [1, 2] }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/by-summoner/1,2', t);
});

test('getLeagueEntriesBySummonerIds', t => {
  client.league.getLeagueEntriesBySummonerIds({ summonerIds: [3, 2, 1] }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/by-summoner/3,2,1/entry', t);
});

test('getLeaguesByTeamIds', t => {
  client.league.getLeaguesByTeamIds({ teamIds: [1, 2, 3] }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/by-team/1,2,3', t);
});

test('getLeagueEntriesByTeamIds', t => {
  client.league.getLeagueEntriesByTeamIds({ teamIds: [1, 2, 3] }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/by-team/1,2,3/entry', t);
});

test('getChallengerTierLeaguesByType', t => {
  client.league.getChallengerTierLeaguesByType({
    type: 'RANKED_TEAM_3x3',
  }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/challenger?type=RANKED_TEAM_3x3', t);
});

test('getMasterTierleaguesByType', t => {
  client.league.getMasterTierleaguesByType({
    type: 'RANKED_TEAM_3x3',
  }, noop);
  shouldCallUrlMatching('/api/lol/na/v2.5/league/master?type=RANKED_TEAM_3x3', t);
});
