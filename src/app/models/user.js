import connection from '../../config/dbconfig'
import { DataTypes, Model, Sequelize } from 'sequelize'

class User extends Model { }

User.init({
    iduser: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    dateofbirth: { type: DataTypes.DATE },
    phonenumber: { type: DataTypes.STRING },
    datecreate: { type: DataTypes.TIME },
}, { connection, tableName: 'user', timestamps: false });

export default User