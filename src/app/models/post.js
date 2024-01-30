import connection from '../../config/DbConfig.js'
import { DataTypes, Model, STRING, Sequelize } from 'sequelize'

class Post extends Model {}

Post.init({
    idpost: {type: DataTypes.STRING, primaryKey: true},
    title: { type: DataTypes.STRING}, 
    datecreate: {type: DataTypes.TIME},
    content: {type: DataTypes.STRING},
}, {sequelize: connection, tableName: "post", timestamps: false})

export default Post