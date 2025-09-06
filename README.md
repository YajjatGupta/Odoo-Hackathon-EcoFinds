# Odoo-Hackathon-EcoFinds

Welcome to EcoFinds, an Expo-based mobile application and Node.js backend project created for the Odoo Hackathon. The application is designed to provide a marketplace-style platform for environmentally friendly products.

## Features

This project includes the following key components and functionalities:

### Frontend (Expo/React Native)

  * **File-Based Routing**: The app uses `expo-router` to manage navigation between screens like the home page, an "Explore" tab, and a product creation screen.
  * **Themed Components**: It supports both light and dark modes, with custom components (`ThemedText` and `ThemedView`) that automatically adapt their styles based on the user's color scheme.
  * **UI Skeletons**: The `HomeScreen` and `AddProductScreen` have foundational UI layouts for a product feed and a product listing form.
  * **Platform-Specific Components**: The app utilizes conditional rendering and platform-specific file extensions (e.g., `IconSymbol.ios.tsx`, `TabBarBackground.ios.tsx`) to provide a native feel on different operating systems.

### Backend (Node.js/Express)

  * **User Authentication**: The server includes an authentication system with routes for user registration and login. It uses `bcryptjs` for password hashing and `jsonwebtoken` for creating and verifying user tokens.
  * **Database Integration**: It connects to a MongoDB database using Mongoose to store user information, as configured in `backend/src/config/db.js`.
  * **Environment Variables**: Secure information like the MongoDB URI and JWT secret are managed using a `.env` file.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

  * Node.js (version 18 or higher)
  * npm or Yarn

### Installation

1.  **Clone the repository**:
    `git clone <repository-url>`

2.  **Install dependencies**:

    ```bash
    cd <project-directory>
    npm install
    ```

### Running the Project

#### Frontend

To start the Expo development server, run:

```bash
npx expo start
```

This will provide a QR code that you can scan with the Expo Go app on your phone to view the project.

#### Backend

The backend server is configured to run on port 5000. To start the server:

```bash
cd backend
npm start
```

The server will connect to your MongoDB database using the credentials in the `.env` file and will be accessible at `http://localhost:5000`.

## Scripts

  * `npm start`: Starts the Expo development server for the frontend.
  * `npm run android`: Opens the app in an Android emulator.
  * `npm run ios`: Opens the app in an iOS simulator.
  * `npm run web`: Opens the app in a web browser.
  * `npm run lint`: Lints the project files.
