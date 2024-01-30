import { database } from '.';
import Sequelize from 'sequelize';

const connection = new Sequelize(
    database.name, 
    database.username, 
    database.password, 
    {
        host: database.host,
        dialect: database.dialect,
    }
);

export default connection;