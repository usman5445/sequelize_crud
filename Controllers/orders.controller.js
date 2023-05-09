const { OrdersModel, UsersModel } = require("../Utils/db.config");

function getAllOrders(req, res) {
  OrdersModel.findAll({ include: { model: UsersModel } })
    .then((orders) => {
      res.send({ message: "All Orders fetched successfully", orders });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ errors: err.errors?.map((er) => er.message) });
    });
}

function getOrderById(req, res) {
  OrdersModel.findByPk(req.params.orderId, {
    include: { model: UsersModel },
  }).then((order) => {
    if (order) {
      res.send({ message: "Order fetched successfully", order });
    } else {
      res
        .status(404)
        .send({ message: `Order not found with id ${req.params.orderId}` });
    }
  });
}

async function newOrder(req, res) {
  const user = await UsersModel.findByPk(req.body.userId);

  if (user) {
    const bData = {
      productName: req.body.productName,
      amount: req.body.amount,
      status: req.body.status,
      userId: req.body.userId,
    };

    OrdersModel.create(bData)
      .then((order) => {
        res.send({ message: "Order created successfully", order });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ errors: err.errors?.map((er) => er.message) });
      });
  } else {
    res
      .status(404)
      .send({ message: "User not found with id " + req.body.userId });
  }
}

async function updateOrderById(req, res) {
  const user = await UsersModel.findByPk(req.body.userId);
  const order = await OrdersModel.findByPk(req.params.orderId);
  if (user && order) {
    if (user.id == order.userId) {
      order
        .update({
          productName: req.body.productName,
          amount: req.body.amount,
          status: req.body.status,
        })
        .then((updatedOrder) => {
          res.send({ message: "Order updated successfully", updatedOrder });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ errors: err.errors?.map((er) => er.message) });
        });
    } else {
      !user &&
        res
          .status(404)
          .send({ message: "User not found with id = " + req.body.userId });

      !order &&
        res
          .status(404)
          .send({ message: "Order not found with id = " + req.params.orderId });
    }
  } else {
    res
      .status(404)
      .send({ message: "User not found with id = " + req.body.userId });
  }
}

async function deleteOrder(req, res) {
  const user = await UsersModel.findByPk(req.body.userId);
  const order = await OrdersModel.findByPk(req.params.orderId);
  if (user && order) {
    if (user.id == order.userId) {
      order
        .destroy()
        .then((deletedOrder) => {
          res.send({ message: "Order deleted successfully", deletedOrder });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ errors: err.errors?.map((er) => er.message) });
        });
    } else {
      res.status(500).send({
        message:
          "This order can only be deleted by owner with userId = " +
          order.userId,
      });
    }
  } else {
    !user &&
      res
        .status(404)
        .send({ message: "User not found with id = " + req.body.userId });

    !order &&
      res
        .status(404)
        .send({ message: "Order not found with id = " + req.params.orderId });
  }
}
module.exports = {
  getAllOrders,
  getOrderById,
  newOrder,
  updateOrderById,
  deleteOrder,
};
