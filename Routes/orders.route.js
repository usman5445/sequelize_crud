const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("all orders");
});

router.get("/:orderId", (req, res) => {
  res.send(`details of ${req.params.orderId}`);
});

router.post("/", (req, res) => {
  res.send("new order created");
});

router.put("/:orderId", (req, res) => {
  res.send(`${req.params.orderId} updated`);
});

router.delete("/:orderId", (req, res) => {
  res.send(`${req.params.orderId} deleted`);
});

module.exports = router;
