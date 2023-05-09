module.exports = (Sequelize, sequelize) => {
  const Orders = sequelize.define("Orders", {
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: { args: true, msg: "Product name cannot be empty" },
      },
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      default: "PENDING",
      validate: {
        isIn: {
          args: [["PENDING", "COMPLETED", "CANCELLED"]],
          msg: "Status has to be either one of these PENDING, COMPLETED, CANCELLED",
        },
      },
    },
  });

  return Orders;
};
