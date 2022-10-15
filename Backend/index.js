const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const EmployeeRoute = require("./routes/EmployeeRoute");
const MedicineRoute = require("./routes/ObatRoute");
const PatientRoute = require("./routes/PatientRoute");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use(EmployeeRoute);
app.use(MedicineRoute);
app.use(PatientRoute);

app.listen(port, () => {
  console.log(`Server is running and listening at http://localhost:${port}`);
});
