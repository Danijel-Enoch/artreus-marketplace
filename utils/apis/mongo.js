import { Model } from "mongoose"
import mongoose from "mongoose"
import listedSchema from "./schemas/listed.schema"

let connection = null;


export const getConnection = async () => {
    if (connection === null) {
        /* istanbul ignore next */
        const uri = "mongodb+srv://admin:admin@cluster0.zcm57ht.mongodb.net/nft" ?? "mongodb://localhost:27017/";
        connection = mongoose.createConnection(uri);

        await connection;
        connection.model("Listed", listedSchema);

    }

    return connection;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getModel = async (name) => {
    try {
        connection = await getConnection();
        return connection.model(name);
    } catch (error) {
        console.log(error)
    }


    return connection.model(name);
};