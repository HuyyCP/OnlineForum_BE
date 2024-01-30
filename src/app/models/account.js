import connection from '../../config/DbConfig.js'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Account extends Model { }

Account.init({
    idaccount: { type: DataTypes.STRING, primaryKey: true },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
}, { sequelize: connection, tableName: "account", timestamps: false })

export default Account