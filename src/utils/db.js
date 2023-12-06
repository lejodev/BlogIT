import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_DB || !MONGODB_URI) {
    throw new Error("Define environment variables")
}

const connection = { isConnected: false }

export const databaseConnect = async () => {
    if (connection.isConnected) {
        console.log("First connection")
        return
    }

    const databaseConnection = await mongoose.connect(MONGODB_URI)

    connection.isConnected = databaseConnection.connections[0].readyState
}