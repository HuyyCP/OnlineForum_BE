import connection from '../../config/DbConfig.js'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Role extends Model { }

Role.init({
    idrole: { type: DataTypes.STRING, primaryKey: true },
    rolename: { type: DataTypes.STRING },
}, { sequelize: connection, tableName: 'role', timestamps: false }
)

export default Role