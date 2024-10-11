import mongoose from "mongoose";

export default async function Connection() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log("Error connecting to database", error);
      });
  } catch (error) {
    console.log("Error connecting to database", error);
  }
}
