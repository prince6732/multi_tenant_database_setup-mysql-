// models/tenant/employee.model.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      employee_code: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      employee_type_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      contact1: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      contact2: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      license: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      adhaar: {
        type: DataTypes.STRING(12),
        allowNull: true,
      },
      guarantee: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "employees",
      timestamps: true,
      paranoid: true, // enables soft deletes
    }
  );

  return Employee;
};
