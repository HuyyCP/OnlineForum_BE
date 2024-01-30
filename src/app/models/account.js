import connection from '../../config/dbconfig'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Account extends Model { }

Account.init({
    idaccount: { type: DataTypes.STRING, primaryKey: true },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
}, { connection, tableName: "account", timestamps: false })

export default Account