const express = require('express')
const app = express()
const helmet = require('helmet')
const SwaggerUi = require("swagger-ui-express");
const Docs = require('./swagger.json')
require('dotenv').config();
const conn = require('./db/conn')
const cors = require('cors')

const port = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(express.static('public'))

const routes = require("./routes");
const userRoutes = require("./routes/user.routes");

app.use('/docs', SwaggerUi.serve, SwaggerUi.setup(Docs))

/* app.use(routes); */
app.use('/user',userRoutes);
app.use(routes)
conn.sync().then(() => {
app.listen(port, () =>
  console.log(
    `Server iniciado em: https:${port} or http://localhost:${port}
    `
  )
)}).catch((err) => console.log(err));
