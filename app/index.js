// Importing config with dotenv to keep out stuff private
import mysql from "mysql2/promise";
import config from "./config.js";
import { delById } from "./utils.js";

// This will be executed when the app starts
const conn = await mysql.createConnection(config.db);

// We destructure the first element of the array returned by execute
await delById({ connection: conn, tableName: "course_names", id: 3 });

conn.end();
