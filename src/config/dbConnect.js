import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@api-financeiro.bwqo4xh.mongodb.net/");

let db = mongoose.connection;

export default db;