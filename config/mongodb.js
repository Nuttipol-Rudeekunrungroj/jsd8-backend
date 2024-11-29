import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB ✅");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};

export default connectDB;



// import mongoose from "mongoose";
// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
//     mongoose.connection.on("connected", () => {
//       console.log("Connected to MongoDB ✅");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error.message);
//   }
// };
// export default connectDB;
