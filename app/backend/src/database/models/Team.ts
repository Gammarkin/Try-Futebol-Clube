import { Model, INTEGER, STRING } from 'sequelize';
import Match from './Match';
import db from '.';

class Team extends Model {
  public id!: number;
  public teamName!: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  timestamps: false,
  underscored: true,
});

Team.hasMany(Match, { foreignKey: 'id', as: 'team' });

export default Team;