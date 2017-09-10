import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import database from "database";
import Routes from "routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Morgan
app.use(
  morgan("dev", {
    skip: function(req, res) {
      return res.statusCode < 400;
    },
    stream: process.stderr
  })
);
app.use(
  morgan("dev", {
    skip: function(req, res) {
      return res.statusCode >= 400;
    },
    stream: process.stdout
  })
);

// Routes
app.use(Routes.categories);
app.use(Routes.topics);
app.use(Routes.images);

app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res
    .status(500)
    .send({ status: 500, message: "internal error", type: "internal" });
});
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
