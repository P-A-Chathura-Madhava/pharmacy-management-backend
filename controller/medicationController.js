import Medication from "../models/medicationModel.js";
import asyncHandler from "express-async-handler";

const createMedication = asyncHandler(async (req, res) => {
  const { id, name, description, quantity } = req.body;
  const newMedication = Medication.build({
    id: id,
    name: name,
    description: description,
    quantity: quantity,
  });

  try {
    await newMedication.save();
    res.status(201).json(newMedication);
  } catch (error) {
    res.json(error);
  }
});

const getAllMedications = asyncHandler(async (req, res) => {
    // console.log("message: all medications");
    const medicines = await Medication.findAll();
    res.status(200).json(medicines);
  });

export {createMedication, getAllMedications};
