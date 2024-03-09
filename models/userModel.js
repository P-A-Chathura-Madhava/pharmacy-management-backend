import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  id: {
    primaryKey: true,
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "cashier"
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;