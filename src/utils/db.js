import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    //await mongoose.connect("mongodb+srv://saulius:t5DO2UeDdZMYaQIe@cluster0.id454k4.mongodb.net/test?retryWrites=true&w=majority");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
