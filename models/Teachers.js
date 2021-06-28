const { Sequelize, DataTypes } = require('sequelize');

const config = require('../config')
const sequelize = new Sequelize(config.urlPostgreSQL)

const teacherSchema = {
    id: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING }
}

module.exports = sequelize.define("teachers", teacherSchema)