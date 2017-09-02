import mongoose from "mongoose";
import errorHandling from "database/error-handling";

mongoose.Promise = global.Promise;

export default function(uri) {
  const connection = mongoose.createConnection(uri, {
    useMongoClient: true
  });

  errorHandling(connection, uri);

  return connection;
}
