import { getPatiens } from "./PatientController.js";
import { getMedicines } from "./MedicineController.js";
import { getUsers } from "./UserController.js";
import Users from "../models/UserModel.js";
import Patient from "../models/PatientModel.js";

export const viewLogin = (req, res) => {
  return res.render("index", {
    layout: "index",
    msg: null,
  });
};
export const viewRegist = (req, res) => {
  return res.render("regist", {
    layout: "regist",
    check: null,
  });
};

export const viewDashboard = async (req, res) => {
  const dokter = await Users.findAll({ where: { role: "dokter" } });
  const apoteker = await Users.findAll({ where: { role: "apoteker" } });
  const patient = await Patient.findAll();

  return res.render("dash", {
    layout: "layouts/dashboard",
    title: "Dashboard",
    dokter: dokter.length,
    apoteker: apoteker.length,
    patient: patient.length,
  });
};

export const viewPasien = async (req, res) => {
  const data = await getPatiens();
  return res.render("pasien/pasien", {
    layout: "layouts/dashboard",
    title: "Data Pasien",
    msg: null,
    data,
  });
};
export const viewAddPasien = async (req, res) => {
  return res.render("pasien/add-pasien", {
    layout: "layouts/dashboard",
    title: "Tambah Data Pasien",
  });
};
export const viewUpdatePasien = async (req, res) => {
  return res.render("pasien/update-pasien", {
    layout: "layouts/dashboard",
    title: "Update Data Pasien",
  });
};
export const viewPegawai = async (req, res) => {
  const data = await getUsers();
  console.log(data);
  return res.render("pegawai/pegawai", {
    layout: "layouts/dashboard",
    title: "Data Pegawai",
    data,
  });
};

export const viewObat = async (req, res) => {
  const data = await getMedicines();
  return res.render("obat/obat", {
    layout: "layouts/dashboard",
    title: "Data Obat",
    data,
  });
};
export const viewAddObat = async (req, res) => {
  return res.render("obat/add-obat", {
    layout: "layouts/dashboard",
    title: "Data Obat",
  });
};
