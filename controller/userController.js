import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const createUser = asyncHandler (async (req, res) => {
    // console.log(req.body);
    const {id, name, username, role, password} = req.body;
    // console.log(id, name, username, role, password);
    const newUser = User.build({
        'id': id,
        'name': name,
        'username': username,
        'role': role,
        'password': password
    })

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.json(error);
    }
});

export {createUser};