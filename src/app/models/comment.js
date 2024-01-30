import connection from '../../config/dbconfig'
import { DataTypes, Model, Sequelize } from 'sequelize'

class Comment extends Model{}

Comment.init({
    idcomment: {type: DataTypes.STRING, primaryKey: true},
    message: {type: DataTypes.STRING},
    datecomment: {type: DataTypes.TIME}
}, {connection, tableName: "comment", timestamps: false})

export default Comment