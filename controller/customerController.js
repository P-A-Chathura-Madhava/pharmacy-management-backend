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

  const getAllCustomers = asyncHandler(async (req, res) => {
    // console.log("message: all customers");
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  });

  const getACustomer = asyncHandler(async (req, res) => {
    // console.log("get a customer");
    const customer = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(customer);
  });

  const deleteACustomer = asyncHandler(async (req, res) => {
    //   console.log("Delete a customer");
    const customer = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    await customer.destroy();
    res.status(200).json({ message: "customer deleted" });
  });

export {createCustomer, getAllCustomers, getACustomer, deleteACustomer};
