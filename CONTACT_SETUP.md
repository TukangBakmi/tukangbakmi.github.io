# Contact Form Setup Guide

## Backend Setup

1. **Install backend dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure email settings:**
   - Edit `server/.env` file
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with your Gmail App Password

3. **Get Gmail App Password:**
   - Go to Google Account settings
   - Enable 2-Factor Authentication
   - Generate App Password for "Mail"
   - Use this password in `.env` file

4. **Start the backend server:**
   ```bash
   cd server
   npm start
   ```

## Frontend Setup

The frontend is already updated to send form data to the backend.

## Running Both

1. **Terminal 1 - Backend:**
   ```bash
   cd server
   npm start
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   npm start
   ```

The contact form will now send real emails to albertardiansyah06@gmail.com!