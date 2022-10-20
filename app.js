import express from "express";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import fileUpload from "express-fileupload";
import routes from "./routes/index.js";
import db from "./config/Database.js";

dotenv.config();

// db config
try {
  db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.log(error);
  console.log("Database not connected");
}

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(fileUpload());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
