import mongoose from "mongoose";
import setup from "database/setup";

const run = () => {
  const connection = setup("mongodb://127.0.0.1:27017/patient_safety");
  return connection;
};

export default run();
