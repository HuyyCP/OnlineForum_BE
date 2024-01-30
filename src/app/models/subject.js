import connection from '../../config/DbConfig.js'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Subject extends Model { }

Subject.init({
    idsubject: { type: DataTypes.STRING, primaryKey: true },
    subjectname: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER }
}, { sequelize: connection, tableName: "subject", timestamps: false })

export default Subject