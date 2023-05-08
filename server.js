const express = require("express");
const app = express();
const userRouter = require("./Routes/users.route.js");
const orderRouter = require("./Routes/orders.route.js");
const { sequelize, OrdersModel, UsersModel } = require("./Utils/db.config.js");
//middlewares
app.use(express.json());

//using express routes
app.use("/order", orderRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("server listning on port 4000");
    });
  })
  .catch((err) => console.log(err));
