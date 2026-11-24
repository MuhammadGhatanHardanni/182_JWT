const db = require("../models");

async function connectDatabase() {
  await db.sequelize.authenticate();
  console.log("Database connected successfully");
}

module.exports = connectDatabase;