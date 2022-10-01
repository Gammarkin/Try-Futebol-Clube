import { Model, INTEGER } from 'sequelize';
import Team from './Team';
import db from '.';

class Match extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeam: {
    allowNull: false,
    type: INTEGER,
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeam: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
});

Match.belongsTo(
  Team,
  { foreignKey: 'homeTeam', as: 'teamHome' },
);

Match.belongsTo(
  Team,
  { foreignKey: 'awayTeam', as: 'teamAway' },
);

export default Match;
