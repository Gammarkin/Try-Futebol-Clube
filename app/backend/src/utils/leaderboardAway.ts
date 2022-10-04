import Team from '../database/models/Team';
import Imatch from '../interfaces/Imatch';
import matchService from '../services/matchService';
import TeamService from '../services/TeamService';

interface Iteam {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

const calculateTotalPoints = (
  wins: number,
  draws: number,
):number =>
  wins * 3 + draws;

const calculateEfficiency = (
  totalPoints: number,
  totalGames: number,
):string =>
  ((totalPoints / (totalGames * 3)) * 100).toFixed(2);

const calculateGoalsBalance = (
  goalsScored: number,
  goalsConceded: number,
): number => goalsScored - goalsConceded;

const getTeamMatches = (matches: Imatch[], team: Team) =>
  matches.filter(
    (match: Imatch) => match.awayTeam === team.id,
  );

const getWins = (teamMatches: Imatch[], team: Team) =>
  teamMatches.filter(
    (match) => match.awayTeamGoals > match.homeTeamGoals
    && match.awayTeam === team.id,
  ).length;

const getDraws = (teamMatches: Imatch[], team: Team) =>
  teamMatches.filter(
    (match) => match.awayTeamGoals === match.homeTeamGoals
    && match.awayTeam === team.id,
  ).length;

const getGoalsScored = (teamMatches: Imatch[], team: Team) =>
  teamMatches.reduce(
    (acc, match) => acc + (match.awayTeam === team.id ? match.awayTeamGoals : match.homeTeamGoals),
    0,
  );

const getGoalsConceded = (teamMatches: Imatch[], team: Team) =>
  teamMatches.reduce(
    (acc, match) => acc + (match.homeTeam === team.id ? match.awayTeamGoals : match.homeTeamGoals),
    0,
  );

const getWinsAndDraws = (teamMatches: Imatch[], team: Team) => {
  const wins = getWins(teamMatches, team);
  const draws = getDraws(teamMatches, team);
  return [wins, draws];
};

const getGoals = (teamMatches: Imatch[], team: Team) => {
  const goalsScored = getGoalsScored(teamMatches, team);
  const goalsConceded = getGoalsConceded(teamMatches, team);
  return [goalsScored, goalsConceded];
};

const sortTeams = (a: Iteam, b:Iteam) =>
  b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| b.goalsOwn - a.goalsOwn;

const getLosses = (teamMatches: Imatch[], team: Team) =>
  teamMatches.filter(
    (match) => match.awayTeamGoals < match.homeTeamGoals
        && match.awayTeam === team.id,
  ).length;

const getTeamStats = (team: Team, matches: Imatch[]) => {
  const teamMatches = getTeamMatches(matches, team);

  const [goalsScored, goalsConceded] = getGoals(teamMatches, team);
  const [wins, draws] = getWinsAndDraws(teamMatches, team);

  const totalPoints = calculateTotalPoints(wins, draws);
  const efficiency = calculateEfficiency(totalPoints, teamMatches.length);
  const goalsBalance = calculateGoalsBalance(goalsScored, goalsConceded);
  const losses = getLosses(teamMatches, team);

  return {
    totalPoints,
    totalGames: teamMatches.length,
    efficiency,
    goalsBalance,
    wins,
    draws,
    goalsScored,
    goalsConceded,
    losses,
  };
};

export default async () => {
  const matches = await matchService.getMatchesWithQuery('false');
  const teams = await TeamService.getAll();

  return teams.map((team) => {
    const teamMatches = getTeamMatches(matches, team);
    const teamStats = getTeamStats(team, matches);

    return {
      name: team.teamName,
      totalPoints: teamStats.totalPoints,
      totalGames: teamMatches.length,
      totalVictories: teamStats.wins,
      totalDraws: teamStats.draws,
      totalLosses: teamStats.losses,
      goalsFavor: teamStats.goalsScored,
      goalsOwn: teamStats.goalsConceded,
      goalsBalance: teamStats.goalsBalance,
      efficiency: teamStats.efficiency,
    };
  }).sort(sortTeams);
};
