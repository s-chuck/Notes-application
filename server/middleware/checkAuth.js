exports.isLoggedIn = function (req, res, next) {
  if(req.user) {
    next();
  } else {
    return res.status(401).send('Access Denied');
  }
}


//General information about how jwt(json web token) works

// Generation:
// After a user logs in successfully, the server creates a JWT containing user information (like user ID and permissions).
// The server signs the token with a secret key known only to the server.

// Transmission:
// The JWT is sent to the client, typically as part of an HTTP header (Authorization: Bearer <token>).

// Validation:
// When the client makes subsequent requests to protected routes or resources, it includes the JWT.
// The server verifies the JWT’s signature to ensure it hasn't been altered.
// If valid, the server extracts the user information from the JWT payload to authorize the request.