import Sequelize from 'sequelize';

const connection = new Sequelize(
    'onlineforum', 
    'root', 
    'root', 
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

export default connection