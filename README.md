# Notes Application

This is a simple notes application that allows users to create, view, update, and delete notes. Users can sign in using Google OAuth 2.0 and view their personal notes. The application is built using Node.js, Express, and MongoDB, and uses Tailwind CSS for styling.

## Features

- User authentication with Google OAuth 2.0
- Create, view, update, and delete notes
- Pagination for viewing notes
- Search functionality for notes
- Responsive design using Tailwind CSS

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Passport.js
- Google OAuth 2.0
- Tailwind CSS
- EJS

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database setup
- Google OAuth 2.0 credentials

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/notes-app.git
    cd notes-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    PORT=5000
    MONGODB_URI=your-mongodb-uri
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    SESSION_SECRET=your-session-secret
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

5. **Open your browser and navigate to:**

    ```
    http://localhost:5000
    ```

## Folder Structure

├── node_modules
├── public/
│ ├── css
│ └── img
├── server/
│ ├── controllers/
│ │ ├── mainController.js
│ │ └── dashboardController.js
│ └── routes/
│ └── index.js
├── views/
│ ├── layouts/
│ │ ├── dashboard.ejs
│ │ ├── front-page.ejs
│ │ └── main.ejs
│ ├── partials/
│ │ ├── footer.ejs
│ │ ├── header_dashboard.ejs
│ │ └── header.ejs
│ ├── about.ejs
│ └── index.ejs
├── .env
├── .gitignore
├── app.js
├── package-lock.json
└── package.json
