import mongoose from "mongoose";


const  Blog = "blog"

const connectDB = async () => {
  try {
    const conn = mongoose.connection;
    conn.on('connected', () => {
      console.log('Connected to MongoDB Atlas Server');
    });
    conn.on('error', (error) => {
      console.error('Error connecting to MongoDB Atlas Server:', error);
    });
    await mongoose.connect(process.env.NODE_ENV_MONGOOSE_URL);

  } catch (error) {
    console.error('Error connecting to MongoDB Atlas Server:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
}
//mongodb+srv://reshmazore7104:NF3HRGamBmzjRgkR@cluster0.dadoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
export default connectDB