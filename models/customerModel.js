import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";


const Customer = sequelize.define("Customer", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  markDelete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});
export default Customer;