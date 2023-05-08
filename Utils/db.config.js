const Sequelize = require("sequelize");
const sequelize = new Sequelize("sequelize_crud", "root", "usman5445", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

//models
const OrdersModel = require("../Models/orders.model")(Sequelize, sequelize);
const UsersModel = require("../Models/users.model")(Sequelize, sequelize);

UsersModel.hasMany(OrdersModel, { foreignKey: "userId" });
OrdersModel.belongsTo(UsersModel, { foreignKey: "userId" });
module.exports = { Sequelize, sequelize, UsersModel, OrdersModel };
