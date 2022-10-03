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

export default { getAll, newMatch, updateInProgress };
