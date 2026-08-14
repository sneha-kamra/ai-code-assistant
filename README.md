# AI Code Assistant

An AI-powered web application that analyzes and explains programming code in simple language. Users can paste code, select a programming language, and receive an AI-generated explanation with important concepts, possible issues, and improvement suggestions.

## 🌐 Live Demo

https://ai-code-assistant-frontend-cf7g.onrender.com

## Features

- AI-powered code explanation
-  Supports multiple programming languages
-  Simple and beginner-friendly explanations
-  Identifies important programming concepts
-  Highlights possible issues and bugs
-  Provides suggestions for improving code
-  Fast React-based user interface
-  API key securely stored using environment variables
-  Fully deployed application

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### AI
- Google Gemini API

### Deployment
- Render
- GitHub

## Project Structure

ai-code-assistant/
│
├── public/
│
├── server/
│   └── server.js
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js


## How It Works

User enters or pastes their source code.
User selects the programming language.
React sends the code to the Node.js/Express backend.
The backend sends the request to the Google Gemini API.
Gemini analyzes the code.
The AI-generated explanation is returned to the frontend.
The explanation is displayed to the user.

## Run Locally

## 1. Clone the repository
git clone https://github.com/sneha-kamra/ai-code-assistant.git

## 2. Open the project
cd ai-code-assistant

## 3. Install dependencies
npm install

## 4. Create an environment file
Create a .env file in the project root:

GEMINI_API_KEY=your_gemini_api_key_here
Never upload your actual API key to GitHub.

## 5. Start the backend
node server/server.js

The backend will run on:
http://localhost:5001

## 6. Start the frontend
Open another terminal and run:
npm run dev

The frontend will run on:
http://localhost:5173

## Environment Variables

The application uses the following environment variable:
Variable	Description
GEMINI_API_KEY	Google Gemini API key used by the backend

## Purpose
This project was built to demonstrate practical experience with:
React frontend development
REST API communication
Node.js and Express backend development
AI API integration
Environment variable management
Full-stack application deployment

## 👩‍💻 Author

## Sneha 
GitHub: https://github.com/sneha-kamra

