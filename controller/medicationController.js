import Medication from "../models/medicationModel.js";
import asyncHandler from "express-async-handler";

const createMedication = asyncHandler(async (req, res) => {
    // console.log(req.body);
  // creating user
  const { id, name, description, quantity } = req.body;
//   console.log(id, name, description, quantity);
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

export {createMedication};
