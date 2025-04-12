const { Sequelize } = require("sequelize");
const { execSync } = require("child_process");

// Create a new tenant database
const createTenantDatabase = async (dbName) => {
  const rootSequelize = new Sequelize("mysql://root:root1234@localhost:3306");

  try {
    await rootSequelize.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
    console.log(`✅ Database ${dbName} created`);
  } catch (err) {
    throw new Error("Failed to create database: " + err.message);
  }
};

const runTenantMigrations = (dbName) => {
  try {
    const migrationPath = "migrations/tenant";

    execSync(
      `npx sequelize-cli db:migrate --url mysql://root:root1234@localhost:3306/${dbName} --migrations-path ${migrationPath}`,
      { stdio: "inherit" }
    );
  } catch (err) {
    throw new Error("Migration failed: " + err.message);
  }
};

const runTenantSeeders = (dbName) => {
  try {
    const seedPath = "seeders/tenant";
    execSync(
      `npx sequelize-cli db:seed:all --url mysql://root:root1234@localhost:3306/${dbName} --seeders-path ${seedPath}`,

      { stdio: "inherit" }
    );
  } catch (err) {
    throw new Error("Seeding failed: " + err.message);
  }
};

module.exports = {
  createTenantDatabase,
  runTenantMigrations,
  runTenantSeeders,
};
