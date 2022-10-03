import Imatch from '../interfaces/Imatch';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

const getAll = async () =>
  Match.findAll({
    include: [
      {
        model: Team,
        as: 'teamHome',
        attributes: [['team_name', 'teamName']],
      },
      {
        model: Team,
        as: 'teamAway',
        attributes: [['team_name', 'teamName']],
      },
    ],
  });

const newMatch = async (match: Imatch) =>
  Match.create(match);

const updateInProgress = async (id: number) =>
  Match.update(
    { inProgress: false },
    { where: { id } },
  );

const updateScore = async (id: number, score: Record<string, number>) =>
  Match.update(
    { homeTeamGoals: score.homeTeamGoals,
      awayTeamGoals: score.awayTeamGoals },
    { where: { id } },
  );

const getMatchesWithQuery = async (inProgress: string) =>
  Match.findAll({
    where: { inProgress },
    include: [
      {
        model: Team,
        as: 'teamHome',
        attributes: [['team_name', 'teamName']],
      },
      {
        model: Team,
        as: 'teamAway',
        attributes: [['team_name', 'teamName']],
      },
    ],
  });

export default {
  getAll,
  newMatch,
  updateInProgress,
  updateScore,
  getMatchesWithQuery,
};
