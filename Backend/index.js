import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import MedicineRoute from "./routes/MedicineRoute.js";
import PatientRoute from "./routes/PatientRoute.js";
import CheckUpRoute from "./routes/CheckUpRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(EmployeeRoute);
app.use(MedicineRoute);
app.use(PatientRoute);
app.use(CheckUpRoute);

app.listen(
  port,
  console.log(`Server up and running at http://localhost:${port}`)
);
