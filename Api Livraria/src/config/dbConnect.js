import mongoose from "mongoose"

mongoose.connect("mongodb+srv://lucas:123@node.bnafmfq.mongodb.net/?retryWrites=true&w=majority");
let db = mongoose.connection;

export default db;