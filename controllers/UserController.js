import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
  const user = await Users.findAll();

  return user;
};
export const getUserById = async (req, res) => {};

export const Register = async (req, res) => {
  const {
    firstName,
    lastName,
    nrp,
    jenisKelamin,
    alamat,
    pekerjaan,
    password,
  } = req.body;

  const name = firstName + " " + lastName;
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await Users.create({
      name,
      address: alamat,
      jkel: jenisKelamin,
      role: pekerjaan,
      nrp,
      password: hashPassword,
    });
    return res.render("regist", {
      layout: "regist",
      check: "Registrasi Berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  console.log(req.body);
  const { nrp, password } = req.body;

  const user = await Users.findOne({ where: { nrp } });

  if (user == null)
    return res.render("index", {
      layout: "index",
      msg: "NRP tidak ditemukan",
    });
  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return res.render("index", {
      layout: "index",
      msg: "Password salah",
    });

  try {
    await Users.update(
      { refresh_token: process.env.TOKEN },
      { where: { id: user.id } }
    );
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const Logout = async (req, res) => {
  const token = process.env.TOKEN;

  const user = await Users.findOne({ where: { refresh_token: token } });

  if (user) {
    try {
      await Users.update({ refresh_token: null }, { where: { id: user.id } });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  }
};
