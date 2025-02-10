import knex from "knex";
import config from "./knexfile.js";
import { debugDb } from "../../debug.js";

debugDb("⚙️ Database connected:", config.connection.filename);

const db = knex(config);

export default db;
