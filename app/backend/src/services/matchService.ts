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

export default { getAll };
