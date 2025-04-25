import mongoose from "mongoose";
 
export const connectDB = async () =>{

    try
    {
   await mongoose.connect(process.env.MONGODB_URI);
   console.log('MongoDb connected: ${conn.connection.host}');
    } catch(error)
    {
   console.error("Mongodb error :",error);
    }

};

