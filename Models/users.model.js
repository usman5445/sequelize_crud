module.exports = (Sequelize, sequelize) => {
  const Users = sequelize.define("Users", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "Users name cannot be empty" },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { args: true, msg: "Please Enter a valid email address" },
      },
    },
  });

  return Users;
};
