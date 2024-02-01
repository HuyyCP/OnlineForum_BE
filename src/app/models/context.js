import connection from "../../config/DbConfig.js"
import Account from "./Account.js"
import Comment from "./Comment.js"
import Post from "./Post.js"
import Role from "./Role.js"
import Subject from "./Subject.js"
import SubSubject from "./SubSubject.js"
import User from "./User.js"

function Connect() {
  try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

function RenderDatabase() {
  Account.belongsTo(User, { foreignKey: 'iduser' });

  Comment.belongsTo(Post, { foreignKey: 'idpost' })
  Comment.belongsTo(User, { foreignKey: 'iduser' })

  Post.hasMany(Comment, { foreignKey: 'idpost' })
  Post.belongsTo(User, { foreignKey: 'iduser' })
  Post.belongsTo(SubSubject, { foreignKey: 'idsubject' })

  Role.hasMany(User, { foreignKey: 'idrole' })

  Subject.hasMany(SubSubject, { foreignKey: 'idsubject' })

  SubSubject.hasMany(Post, { foreignKey: 'idsubject' })
  SubSubject.belongsTo(Subject, { foreignKey: 'idsuject' })

  User.hasMany(Post, { foreignKey: 'iduser' })
  User.hasMany(Comment, { foreignKey: 'iduser' })
  User.hasOne(Account, { foreignKey: 'iduser' });
  User.belongsTo(Role, { foreignKey: 'idrole' })

  connection.sync({});
  console.log("All models were synchronized successfully.");
}

export default { Connect, RenderDatabase };