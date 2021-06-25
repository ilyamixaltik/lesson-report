const { Sequelize, DataTypes } = require('sequelize');

const config = require('../config')
const sequelize = new Sequelize(config.urlPostgreSQL)

const lessonSchema = {
    id: { type: DataTypes.INTEGER },
    date: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER }
}

module.exports = sequelize.define("lessons", lessonSchema)