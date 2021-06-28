const { Sequelize, DataTypes } = require('sequelize');

const config = require('../config')
const sequelize = new Sequelize(config.urlPostgreSQL)

const studentSchema = {
    id: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING }
}

module.exports = sequelize.define("students", studentSchema)