const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("all users fetched");
});

router.get("/:userId", (req, res) => {
  res.send(`all orders of ${req.params.userId}`);
});

router.post("/", (req, res) => {
  res.send("new user created");
});

router.put("/:userId", (req, res) => {
  res.send(`${req.params.userId} updated`);
});

router.delete("/:userId", (req, res) => {
  res.send(`${req.params.userId} deleted`);
});

module.exports = router;
