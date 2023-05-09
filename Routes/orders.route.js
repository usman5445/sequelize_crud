const router = require("express").Router();

const {
  getAllOrders,
  getOrderById,
  newOrder,
  updateOrderById,
  deleteOrder,
} = require("../Controllers/orders.controller");

router.get("/", getAllOrders);

router.get("/:orderId", getOrderById);

router.post("/", newOrder);

router.put("/:orderId", updateOrderById);

router.delete("/:orderId", deleteOrder);

module.exports = router;
