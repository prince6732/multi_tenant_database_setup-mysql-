// models/tenant/truck_type.model.js
module.exports = (sequelize, DataTypes) => {
  const TruckType = sequelize.define(
    "TruckType",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      is_primary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "truck_types",
      timestamps: false,
    }
  );

  return TruckType;
};
