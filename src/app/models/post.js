import connection from '../../config/dbconfig'
import { DataTypes, Model, STRING, Sequelize } from 'sequelize'

class Post extends Model {}

Post.init({
    idpost: {type: DataTypes.STRING, primaryKey: true},
    title: { type: DataTypes.STRING}, 
    datecreate: {type: DataTypes.TIME},
    content: {type: DataTypes.STRING},
}, {connection, tableName: "post", timestamps: false})

export default Post