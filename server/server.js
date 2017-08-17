import bodyParser from "body-parser";
import express from "express";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const router = express.Router();
router.get("/topics", (req, res) => {
  const topics = [
    { id: 1, name: "funny topic", points: [{}] },
    { id: 5, name: "other", points: [{}] }
  ];
  res.json(topics);
});
app.use(router);
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
