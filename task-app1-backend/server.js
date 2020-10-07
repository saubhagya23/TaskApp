const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/user.routes.js');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    // openapi: '3.0.0',
    info : {
      title: 'Swagger Express Api Docs',
      version: '1.0.0',
    },
    servers: ["http://localhost:3000"]
  },
  apis: ['/Users/saubhagya/Desktop/task-app1-backend/app/routes/user.routes.js']
}

const swaggerSpec = swaggerJSDoc(options);

// create express app
const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const user = require('./app/controllers/user.controller');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// define a simple route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to TTN Node-React demo application."});
});

// Require Users routes
// app.post('/user', user.create);
app.use('/', routes);
app.use('/api-documentation', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});