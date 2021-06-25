const express = require('express')
const app = express()
const port = 8000

app.get('/', require('./routes/index'))

app.listen(port, () => {
    console.log(`Server started successfully to port ${port}`)
})