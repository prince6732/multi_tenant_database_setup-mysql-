// models/tenant/state.model.js
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define(
    "State",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "states",
      timestamps: true,
      paranoid: true, // Enables soft delete (uses deletedAt)
    }
  );

  return State;
};
