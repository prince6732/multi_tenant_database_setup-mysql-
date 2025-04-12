// models/tenant/setting.model.js
module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define(
    "Setting",
    {
      key: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      value: {
        type: DataTypes.TEXT("medium"),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "settings",
      timestamps: false, // no createdAt/updatedAt
    }
  );

  return Setting;
};
