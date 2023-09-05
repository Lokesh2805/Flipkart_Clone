import mongoose from "mongoose";

export const connection = async (username, password) =>{
    try{
        const URL = `mongodb+srv://${username}:${password}@cluster2.obsqnnz.mongodb.net/mongodata?retryWrites=true&w=majority`;
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
       console.log("connected to database");
    }catch(error){
        console.log("error in connection", error.message);
    }
}
export default connection;