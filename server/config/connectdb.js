import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=>{
    console.log("first", DATABASE_URL)
    try {
        await mongoose.connect(DATABASE_URL, 
          
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("DATABASE_URL", DATABASE_URL);
        console.log("Connected to the database");

    } catch (error) {
        console.log(`Error connecting to database:`, error.message);
    }
}

export default connectDB;


