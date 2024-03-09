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

const getAMedication = asyncHandler(async (req, res) => {
  // console.log("get a medication");
  const medication = await Medication.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(medication);
});

const deleteAMedication = asyncHandler(async (req, res) => {
  //   console.log("Delete a medication");
  const medication = await Medication.findOne({
    where: {
      id: req.params.id,
    },
  });
  await medication.destroy();
  res.status(200).json({ message: "medication deleted" });
});

const updateAMedication = asyncHandler(async (req, res) => {
//   console.log("Update a medication");
  const medication = await Medication.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { name, description, quantity } = req.body;
  await medication.set({
    name: name,
    description: description,
    quantity: quantity,
  });
  await medication.save();
  res.status(200).json(medication);
});

const softDeleteAMedication = asyncHandler(async (req, res) => {
    // console.log("soft delete a medication");
    const medication = await Medication.findOne({
      where: {
        id: req.params.id,
      },
    });
    await medication.set({
      markDelete: true,
    });
    await medication.save();
    res.status(200).json(medication);
  });

export {
  createMedication,
  getAllMedications,
  getAMedication,
  deleteAMedication,
  updateAMedication,
  softDeleteAMedication
};
