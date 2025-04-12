// models/tenant/role.model.js
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
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
        defaultValue: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "roles",
      timestamps: true,
      paranoid: true, // Enables soft deletes (uses `deletedAt`)
    }
  );

  return Role;
};
