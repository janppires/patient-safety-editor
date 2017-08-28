import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import createDatabase from "config/db";
import Routes from "routes";

const database = createDatabase("mongodb://127.0.0.1:27017/patient_safety");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

database.then(conn => {
  app.use(Routes.topics(conn));
  app.use(Routes.points(conn));
  app.use(Routes.images(conn));
});

app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res
    .status(500)
    .send({ status: 500, message: "internal error", type: "internal" });
});
app.use(morgan("dev"));
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
