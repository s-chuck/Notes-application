require('dotenv').config();
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require("method-override");
const app = express();


const port = process.env.PORT || 5000;
// Define the port for the server to listen on. 
const connectDB = require('./server/config/db'); 
// Import the function/module responsible for connecting to the MongoDB database.
const session = require('express-session'); 
// Import express-session middleware for managing sessions in the application.
// Sessions allow storing user-specific data across requests.
const passport = require('passport');
// Import Passport.js middleware for authentication.
// Passport is used to authenticate requests and manage user sessions.
const MongoStore = require('connect-mongo');
// Import connect-mongo to store session data in MongoDB.
// This enables persistent session storage across server restarts.



// Session middleware setup
app.use(session({
  secret: 'keyboard cat', // Secret used to sign the session ID cookie for security
  resave: false, // Don't save session if unmodified
  saveUninitialized: true, // Always create a session to ensure session ID cookie is set
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI // MongoDB connection URI for session storage
  }),
  //cookie: { maxAge: new Date ( Date.now() + (3600000) ) } 
  // Date.now() - 30 * 24 * 60 * 60 * 1000
}));
// Initialize Passport middleware
app.use(passport.initialize());
// Persistent login sessions using Passport
app.use(passport.session());
// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));
// Parse incoming requests with JSON payloads
app.use(express.json());
// Enable HTTP method override for RESTful services
app.use(methodOverride("_method"));
connectDB();


// static files
// staic files are those files that do not change dynamically like cs or an image things like that.They are often stored in public folder.
app.use(express.static('public'));

//templating engine we are setting what we have to use for particular things 
// ex: ejs is used for frontend and ui so we are using this for that.
//layout is like a blueprint that we want every page have the same to maintain consistency so that's that.
app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');


//Routes
// Routes are the same as the name suggests it takes the page to it's desired location. For ex here we have done app.use('/', require('./server/routes/index')); it says whenever you encounter / in the address bar import the module from this address and there you would have a router variable which tells you how to respond to the user's request. 
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));
app.use('/', require('./server/routes/auth'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
