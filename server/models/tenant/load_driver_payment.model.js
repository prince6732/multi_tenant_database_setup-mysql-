// models/tenant/load_driver_payment.model.js
module.exports = (sequelize, DataTypes) => {
  const LoadDriverPayment = sequelize.define(
    "LoadDriverPayment",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      load_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
      driver_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
      },
      pod_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: "Proof of delivery date",
      },
      pod: {
        type: DataTypes.DECIMAL(6, 2),
        allowNull: false,
      },
      paid_pod: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      pod_comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      load_payment: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      credit: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      labour: {
        type: DataTypes.DECIMAL(7, 2),
        defaultValue: 0,
      },
      paid_labour: {
        type: DataTypes.DECIMAL(7, 2),
        defaultValue: 0,
      },
      payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      details_json: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      comment: {
        type: DataTypes.STRING,
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
      tableName: "load_driver_payments",
      timestamps: true,
      paranoid: true, // enables soft deletes
    }
  );

  return LoadDriverPayment;
};
