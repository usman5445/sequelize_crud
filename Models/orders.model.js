module.exports = (Sequelize, sequelize) => {
  const Orders = sequelize.define("Orders", {
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("PENDING", "COMPLETED", "CANCELLED"),
      default: "PENDING",
      allowNull: false,
    },
  });

  return Orders;
};
