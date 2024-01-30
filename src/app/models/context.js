import connection from "../../config/dbconfig"
import Account from "./account"
import Comment from "./comment"
import Post from "./post"
import Role from "./role"
import Subject from "./subject"
import SubSubject from "./subsubject"
import User from "./user"

function Connect() {
    try {
        connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

function RenderDatabase() {
    Account.belongsTo(User, {foreignKey: 'iduser'});
    
    Comment.belongsTo(Post, {foreignKey: 'idpost'})
    Comment.belongsTo(User, {foreignKey: 'iduser'})
    
    Post.hasMany(Comment, {foreignKey: 'idpost'})
    Post.belongsTo(User, {foreignKey: 'iduser'})
    Post.belongsTo(SubSubject, {foreignKey: 'idsubject'})
    
    Role.hasMany(User, {foreignKey: 'idrole'})
    
    Subject.hasMany(SubSubject, {foreignKey: 'idsubject'})
    
    SubSubject.hasMany(Post, {foreignKey: 'idsubject'})
    SubSubject.belongsTo(Subject, {foreignKey: 'idsuject'})

    User.hasMany(Post, {foreignKey: 'iduser'})
    User.hasMany(Comment, {foreignKey: 'iduser'})
    User.hasOne(Account, {foreignKey: 'iduser'});
    User.belongsTo(Role, {foreignKey: 'idrole'})

    sequelize.sync({ });
    console.log("All models were synchronized successfully.");
}

module.exports = {Connect, RenderDatabase};