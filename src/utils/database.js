const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "spagetti_db1"
});

module.exports = db;
