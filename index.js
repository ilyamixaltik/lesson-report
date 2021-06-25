const { Sequelize } = require('sequelize');
const express = require('express')
const app = express()
const config = require('./config')

const sequelize = new Sequelize(config.urlPostgreSQL)
sequelize.connectionManager.getConnection(config.urlPostgreSQL)
    .then(async () => console.log('[PostgreSQL] База данных успешно запущена'))
    .catch(async (e) => console.error)

app.get('/', require('./routes/index'))

app.listen(config.expressPort, () => {
    console.log(`[Express] Сервер успешно запущен`)
})