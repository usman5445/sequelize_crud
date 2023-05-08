module.exports = (Sequelize, sequelize) => {
  const Users = sequelize.define("Users", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Users;
};
