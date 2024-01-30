import connection from '../../config/dbconfig'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Role extends Model { }

Role.init({
    idrole: { type: DataTypes.STRING, primaryKey: true },
    rolename: { type: DataTypes.STRING },
}, { connection, tableName: 'role', timestamps: false }
)

export default Role