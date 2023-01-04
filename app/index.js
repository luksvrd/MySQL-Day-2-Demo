// Importing config
import config from "./config.js";
import mysql from "mysql2/promise";

// This will show
const db = mysql.createConnection(config.db);
