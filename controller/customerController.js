import Customer from "../models/customerModel.js";
import asyncHandler from "express-async-handler";

const createCustomer = asyncHandler(async (req, res) => {
    // console.log("create customer");
    const { id, name, address, contact } = req.body;
    const newCustomer = Customer.build({
      id: id,
      name: name,
      address: address,
      contact: contact,
    });
  
    try {
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.json(error);
    }
  });

export {createCustomer};
