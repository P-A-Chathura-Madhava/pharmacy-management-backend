import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";


const Medication = sequelize.define("Medication", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  markDelete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});
export default Medication;