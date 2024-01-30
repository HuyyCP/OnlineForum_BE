import connection from '../../config/DbConfig.js'
import { DataTypes, Model, Sequelize } from 'sequelize'

class SubSubject extends Model { }

SubSubject.init({
    idsubject: { type: DataTypes.STRING, primaryKey: true },
    subjectname: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER }
}, { sequelize: connection, tableName: "subsubject", timestamps: false })

export default SubSubject