import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
import cors from "cors";
//routes
import userRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin/auth.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";
import saleRoutes from "./routes/sale.js";
import followRoutes from "./routes/follow.js";
import authenticateRoutes from "./routes/authenticate.js";

import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

const app = express();

//enviroment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://sfz:<password>@cluster0.c3klu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rff6dvd.mongodb.net/test/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected");
  });
// COR

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
// app.use(fileUpload());
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", saleRoutes);
app.use("/api", followRoutes);
app.use("/api", authenticateRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
