import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pharmacy_db", "root", "pass", {
  dialect: "sqlite",
  host: "../database/dev.sqlite",
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error);
  }
};

export {sequelize, connectToDb};