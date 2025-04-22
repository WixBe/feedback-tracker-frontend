# Feedback Tracker Frontend


## Description

The **Feedback Tracker Frontend** is the user-facing web application of the Feedback Tracker platform. Built using TypeScript and modern web technologies, it allows users to submit, view, and track feedback seamlessly. This frontend application depends on the backend service ([Feedback Tracker Backend](https://github.com/WixBe/feedback-tracker-backend)) for data processing and storage.

## Features

- **Interactive UI**: Intuitive and responsive interface for submitting and managing feedback.
- **TypeScript-Based**: Strongly typed code for improved reliability and maintainability.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **REST API Integration**: Communicates with the backend to provide real-time functionality.

## Technology Stack

This repository is predominantly written in:
- **TypeScript** (63.5%)
- **CSS** (31.7%)
- **JavaScript** (3.4%)
- **HTML** (1.4%)

## Prerequisites

- Node.js version 14 or higher.
- [Feedback Tracker Backend](https://github.com/WixBe/feedback-tracker-backend) set up and running.

## Installation

To set up the frontend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WixBe/feedback-tracker-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd feedback-tracker-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
    - Create a .env file in the root directory.
    - Add the following variables:
    ```code
    REACT_APP_API_URL=http://localhost:4000
    ```
5. Start the server:
   ```bash
   npm run start
   ```
   
## Usage

Visit http://localhost:3000 in your browser to interact with the application. Ensure that the backend server is running at http://localhost:4000.

## Directory Structure

```plaintext
.
├── src/                # Source code for the application
├── public/             # Public assets
├── tests/              # Unit and integration tests
├── styles/             # CSS and styling files
├── index.html          # Main HTML file
└── README.md           # Project documentation
```
