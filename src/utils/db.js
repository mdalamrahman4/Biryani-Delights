import mongoose from "mongoose";
const mangoURI = process.env.DB_URL;
const connection={}
async function connect(){
    if(connection.isConnected){
        console.log("Using existing connection");
        return;
    }
    if(mongoose.connections.length>0){
        connection.isConnected = mongoose.connections[0].readyState;
        if(connection.isConnected===1){
            console.log("Using existing connection");
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(mangoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        connectTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 30000, // 30 seconds
    });
    console.log("New connection");
    connection.isConnected = db.connections[0].readyState;
}
async function disconnect(){
    if(connection.isConnected){
        if(process.env.NODE_ENV==="production"){
            await mongoose.disconnect();
            connection.isConnected = false;
        }else{
            console.log("Not disconnected");
        }
    }
}
const db={connect,disconnect};
export default db;