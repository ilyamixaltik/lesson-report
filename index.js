const { Sequelize } = require('sequelize');
const express = require('express')
const app = express()
const port = 3000

const sequelize = new Sequelize('postgres://postgres:postgres@127.0.0.1:5432/test')
sequelize.connectionManager.getConnection('postgres://postgres:postgres@127.0.0.1:5432/test')
    .then(async () => console.log('[PostgreSQL] База данных успешно запущена'))
    .catch(async (e) => console.error)

app.get('/', require('./routes/index'))

app.listen(port, () => {
    console.log(`Server started successfully to port ${port}`)
})