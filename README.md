# Express.js JWT Authentication

This is an application on how to implement JWT authentication in an Express.js Application.

## Run the Application

To run this application, you need to install Node.js on your machine.

Clone the repository from GitHub:

```
git clone https://github.com/username/jwt-passport-demo.git
```

### Navigate to the project directory:

```
cd jwt-passport-demo
```

## Install the dependencies:

```
npm install
```

## Start the application:

```
npm start
```

You can now access the API endpoints using a tool like **Postman** or **cURL**.

## API Endpoints:

### POST /auth/register

Registers a new user. Requires a JSON request body with username and password fields.

Example request body:

```
{
  "username": "johndoe",
  "password": "password123"
}
```

### POST /auth/login

Logs in a user and generates a new access token and refresh token. Requires a JSON request body with username and password fields.

Example request body:

```
{
  "username": "johndoe",
  "password": "password123"
}
```

### POST /auth/token

Generates a new access token using a refresh token. Requires a JSON request body with the refreshToken field.

Example request body:

```
{
  "refreshToken": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

### POST /auth/logout

Logs out a user and invalidates the refresh token. Requires a JSON request body with the refreshToken field.

Example request body:

```
{
  "refreshToken": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
}
```

Note: To run the application, you will need to set the JWT_SECRET environment variable to a secure secret key. You can set this variable in a .env file in the project root directory. You can generate a secure key using the command below:

```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```
