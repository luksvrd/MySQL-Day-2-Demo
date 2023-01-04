// Importing config with dotenv to keep out stuff private
import mysql from "mysql2/promise";
import config from "./config.js";
import Connection from "mysql2/typings/mysql/lib/Connection.js";

// This will be executed when the app starts
const db = await mysql.createConnection(config.db);

const [employees] = await conn.execute("SELECT * FROM employees LIMIT 10");
console.log(results);
conn.end();
