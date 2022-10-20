import Medicines from "../models/MedicineModel.js";
import path from "path";
import fs from "fs";

export const getMedicines = async (req, res) => {
  try {
    const medicine = await Medicines.findAll();
    return medicine;
  } catch (error) {
    console.log(error);
  }
};
export const getMedicineById = async (req, res) => {
  try {
    const id = req.params.id;
    const medicine = await Medicines.findOne({ where: { id } });
    if (!medicine) return res.status(404).json({ msg: "Data not found!" });
    res.status(200).json(medicine);
  } catch (error) {
    console.log(error);
  }
};
export const saveMedicine = async (req, res) => {
  if (!req.body)
    return res.status(204).json({ msg: "Masukkan data yang diperlukan" });
  const name = req.body.name;
  const usage = req.body.usage;
  const image = req.files.image;
  // const imageSize = image.data.length;
  // const ext = path.extname(image.name);
  const fileName = Date.now() + image;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  image.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Medicines.create({
        name,
        usage,
        image: fileName,
        url,
      });
      res.status(201).json({ msg: "Medicine Created Successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "Failed Save Medicine" });
    }
  });
};
export const updateMedicine = async (req, res) => {
  const medicine = await Medicines.findOne({ where: { id: req.params.id } });
  if (!medicine) return res.status(404).json({ msg: "Data not found!" });

  let fileName = "";
  if (req.files === null || req.files === undefined) {
    fileName = medicine.image;
  } else {
    const image = req.files.image;
    const imageSize = image.data.length;
    const ext = path.extname(image.name);
    fileName = image.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (imageSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filePath = `./public/images/${medicine.image}`;
    fs.unlinkSync(filePath);

    image.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.name;
  const usage = req.body.usage;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Medicines.update(
      { name, usage, image: fileName, url },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ msg: "Medicine Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Medicine fail to update" });
  }
};
export const deleteMedicine = async (req, res) => {
  const medicine = await Medicines.findOne({ where: { id: req.params.id } });
  if (!medicine) return res.status(404).json({ msg: "Data not found!" });
  const filePath = `./public/images/${medicine.image}`;
  fs.unlinkSync(filePath);

  await Medicines.destroy({ where: { id: req.params.id } });
  res.status(200).json({ msg: "Medicine Deleted successfully" });
  try {
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Medicine fail to delete" });
  }
};
