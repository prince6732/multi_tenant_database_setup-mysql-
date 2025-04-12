// models/tenant/city.model.js
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    "City",
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
      state_id: {
        type: DataTypes.BIGINT.UNSIGNED,
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
      tableName: "cities",
      timestamps: true,
      paranoid: true, // enables soft deletes
    }
  );

  City.associate = (models) => {
    City.belongsTo(models.State, {
      foreignKey: "state_id",
      onDelete: "RESTRICT",
    });
  };

  return City;
};
