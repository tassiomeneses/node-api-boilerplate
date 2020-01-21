const express = require('express')
const routes = require('./routes')
const app = express();

app.set('port', 5000)

app.use(express.json())
app.use(routes)

const port = app.get('port')

app.listen(port, () => console.log(`Listening in port: ${port}`))