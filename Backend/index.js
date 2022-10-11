import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(
  port,
  console.log(`Server up and running at http://localhost:${port}`)
);
