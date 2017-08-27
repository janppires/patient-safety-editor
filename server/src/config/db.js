import mongoose from "mongoose";

mongoose.Promise = global.Promise;

export default async function db(uri) {
  const connection = await mongoose.createConnection(uri, {
    useMongoClient: true
  });

  connection.onOpen(function() {
    console.log("Mongoose default connection open to " + uri);
  });

  connectionErrorHandling(connection, uri);

  return connection;
}

const connectionErrorHandling = (conn, dbURI) => {
  // CONNECTION EVENTS
  // When successfully connected
  conn.on("connected", function() {
    console.log("Mongoose default connection open to " + dbURI);
  });

  // If the connection throws an error
  conn.on("error", function(err) {
    console.log("Mongoose default connection error: " + err);
  });

  // When the connection is disconnected
  conn.on("disconnected", function() {
    console.log("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", function gracefulExit() {
    conn.close(function() {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });
};
