import connection from '../../config/dbconfig'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Subject extends Model { }

Subject.init({
    idsubject: { type: DataTypes.STRING, primaryKey: true },
    subjectname: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER }
}, { connection, tableName: "subject", timestamps: false })

export default Subject