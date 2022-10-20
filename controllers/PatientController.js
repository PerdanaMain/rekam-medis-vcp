import Patient from "../models/PatientModel.js";

export const getPatiens = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    return patients;
  } catch (error) {
    console.log(error);
  }
};

export const savePatient = async (req, res) => {
  const { name, gender, address, born_date, contact, status } = req.body;

  try {
    await Patient.create({ name, gender, address, born_date, contact, status });
    const data = await Patient.findAll();
    return res.render("pasien/pasien", {
      layout: "layouts/dashboard",
      title: "Data Pasien",
      msg: "Data Pasien Berhasil ditambahkan",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;

  try {
    await Patient.destroy({ where: { id } });
    res.redirect("/pasien");
  } catch (error) {
    console.log(error);
  }
};
