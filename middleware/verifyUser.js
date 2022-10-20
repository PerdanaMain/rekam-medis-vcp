import Users from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  const token = process.env.TOKEN;

  const users = await Users.findOne({ where: { refresh_token: token } });

  if (!users) return res.redirect("/");
  next();
};
