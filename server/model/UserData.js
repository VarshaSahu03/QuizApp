import mongoose, { Schema } from "mongoose";

//table

const UserDataSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

});

//model
const UserDataModel = mongoose.model("Users Data", UserDataSchema);
export default UserDataModel;