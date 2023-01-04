// Using dotenv, we
import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbNAME: process.env.DB_NAME,
    host: process.env.DB_HOST || "localhost",
  },
};
