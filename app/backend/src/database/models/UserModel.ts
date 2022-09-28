import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class UserModel extends Model {
public id!: number;
public username!: string;
public role!: string;
public email!: string;
public password!: string;
};

UserModel.init({
id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
},
username: {
    type: STRING,
    allowNull: false,
},
role: {
    type: STRING,
    allowNull: false,
},
email: {
    type: STRING,
    allowNull: false,
},
password: {
    type: STRING,
    allowNull: false,
},
}, {
sequelize: db,
underscored: true,
timestamps: false,
modelName: 'users',
});

export default UserModel;
