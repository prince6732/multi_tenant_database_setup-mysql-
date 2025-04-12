module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cities", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });

    // Add foreign key constraint
    await queryInterface.addConstraint("cities", {
      fields: ["state_id"],
      type: "foreign key",
      name: "fk_cities_state_id",
      references: {
        table: "states",
        field: "id",
      },
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cities");
  },
};
