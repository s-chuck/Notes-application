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

## Usage

- **Sign In:** Click on the "Sign in with Google" button to sign in using your Google account.
- **Dashboard:** View a list of your notes on the dashboard.
- **Add Note:** Click on the "+ New Note" button to add a new note.
- **View Note:** Click on a note to view its details.
- **Edit Note:** Click on the "Edit" button to update a note.
- **Delete Note:** Click on the "Delete" button to delete a note.
- **Search:** Use the search bar to search for notes.
