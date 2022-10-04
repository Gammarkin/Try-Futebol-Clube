import leaderboardAway from './leaderboardAway';
import leaderboardFormat from './leaderboardFormat';

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

const sortTeams = (a: Iteam, b:Iteam) =>
  b.totalPoints - a.totalPoints
|| b.totalVictories - a.totalVictories
|| b.goalsBalance - a.goalsBalance
|| b.goalsFavor - a.goalsFavor
|| b.goalsOwn - a.goalsOwn;

const calculateEfficiency = (
  totalPoints: number,
  totalGames: number,
):string =>
  ((totalPoints / (totalGames * 3)) * 100).toFixed(2);

export default async () => {
  const away = await leaderboardAway();
  const format = await leaderboardFormat();

  away.forEach((team) => {
    const teamFormat = format.find((item) => item.name === team.name);

    if (teamFormat) {
      teamFormat.totalPoints += team.totalPoints;
      teamFormat.totalGames += team.totalGames;
      teamFormat.totalVictories += team.totalVictories;
      teamFormat.totalDraws += team.totalDraws;
      teamFormat.totalLosses += team.totalLosses;
      teamFormat.goalsFavor += team.goalsFavor;
      teamFormat.goalsOwn += team.goalsOwn;
      teamFormat.goalsBalance += team.goalsBalance;
      teamFormat.efficiency = calculateEfficiency(teamFormat.totalPoints, teamFormat.totalGames);
    }
  });

  return format.sort(sortTeams);
};
