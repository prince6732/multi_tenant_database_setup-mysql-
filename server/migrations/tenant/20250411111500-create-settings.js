module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("settings", {
      key: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.TEXT("medium"),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("settings");
  },
};
