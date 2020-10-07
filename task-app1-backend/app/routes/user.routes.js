  var routes = require('express').Router();
  const user = require('../controllers/user.controller');
  const auth = require('../middlewares/auth');

  // Create a new User
  routes.post('/user', user.create);

  // Retrieve single user on login.
  routes.post('/user/login', user.findLoginUser);

  //get logged in user info.
  routes.get('/user/me', auth, user.findCurrentUser);

  // Retrieve all Users
  routes.get('/user', user.findAll);


  // Retrieve a single User with userId
  routes.get('/user/:userId', user.findOne);

  // Update a user with userId
  routes.put('/user/:userId', user.update);

  // Delete a user with userId
  routes.delete('/user/:userId', user.delete);

  // logout user
  routes.post('/user/logout', auth, user.logoutUser);
  
  module.exports = routes;

  /**
   *  @swagger
   * 
   * info:
   *  description: "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters."
   *  termsOfService: "http://swagger.io/terms/"
   *  contact:
   *    email: "apiteam@swagger.io"
   * host: "myApplication.swagger.io"
   * basePath: "/v2"
   * schemes:
   *  - "https"
   *  - "http"
   * paths:
   *  /user:
   *    post:
   *      summary: "Creates user for the application"
   *      description: ""
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      parameters:
   *        - in: "body"
   *          name: "body"
   *          description: "user object"
   *          schema:
   *            $ref: "#/definitions/User_Create"
   *          required: true
   *      responses:
   *        "200":
   *          description: "successful operation"
   *        "400":
   *          description: "Invalid user data supplied"
   *  /user/login:
   *    post: 
   *      summary: "Logs user into the application"
   *      description: ""
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      parameters:
   *        - in: "body"
   *          name: "body"
   *          description: "user object"
   *          schema:
   *            $ref: "#/definitions/User"
   *          required: true
   *      responses:
   *        "200":
   *          description: "successful operation"
   *          schema:
   *            type: "string"
   *            headers:
   *              X-Rate-Limit:
   *                type: "integer"
   *                format: "int32"
   *                description: "calls per hour allowed by the user"
   *              X-Expires-After:
   *                type: "string"
   *                format: "date-time"
   *                description: "date in UTC when token expires"
   *        "400":
   *          description: "Invalid username/password supplied"
   *  /user/logout:
   *    post: 
   *      summary: "Logs out user from the application"
   *      description: ""
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      responses:
   *        "200":
   *          description: "successful operation"
   *  /user/me:
   *    get:
   *      summary: "get current user info"
   *      description: ""
   *      operationId: "getCurrentUser"
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      responses:
   *        "200":
   *          description: "successful operation"
   *          schema:
   *            $ref: "#/definitions/User_Create"
   *        "400":
   *          description: "Invalid username supplied"
   *        "404":
   *          description: "User not found"
   *  /user/{id}:
   *    get:
   *      tags:
   *        - "user"
   *      summary: "Get user by user id"
   *      description: ""
   *      operationId: "getUserById"
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      parameters:
   *        - name: "username"
   *          in: "path"
   *          description: "The id that needs to be fetched. Use 101 for testing. "
   *          required: true
   *          type: "string"
   *      responses:
   *        "200":
   *          description: "successful operation"
   *          schema:
   *            $ref: "#/definitions/User_Create"
   *        "400":
   *          description: "Invalid username supplied"
   *        "404":
   *          description: "User not found"
   *    put:
   *      tags:
   *        - "user"
   *      summary: "Updated user"
   *      description: "This can only be done by the logged in user."
   *      operationId: "updateUser"
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      parameters:
   *        - name: "userId"
   *          in: "path"
   *          description: "id that need to be updated"
   *          required: true
   *          type: "string"
   *        - in: "body"
   *          name: "body"
   *          description: "Updated user object"
   *          required: true
   *          schema:
   *            $ref: "#/definitions/User_Create"
   *      responses:
   *        "400":
   *          description: "Invalid user supplied"
   *        "404":
   *           description: "User not found"
   *    delete:
   *      tags:
   *        - "user"
   *      summary: "Delete user"
   *      description: "This can only be done by the logged in user."
   *      operationId: "deleteUser"
   *      produces:
   *        - "application/xml"
   *        - "application/json"
   *      parameters:
   *        - name: "userId"
   *          in: "path"
   *          description: "The name that needs to be deleted"
   *          required: true
   *          type: "string"
   *      responses:
   *          "400":
   *            description: "Invalid userId supplied"
   *          "404":
   *            description: "User not found"
   * definitions:
   *  User:
   *    type: "object"
   *    properties:
   *      email:
   *        type: "string"
   *      password:
   *        type: "string"
   *  User_Create:
   *    type: "object"
   *    properties:
   *      name:
   *        type: "string"
   *      email:
   *        type: "string"
   *      password:
   *        type: "string"
   *      id:
   *        type: "string"
   *      age:
   *        type: "number"
   */
