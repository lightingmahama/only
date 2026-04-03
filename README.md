# Unipra Artwork Gallery

A modern artwork booking system with real-time notifications and multi-device support.

## 🚀 Quick Start

### Option 1: Try the Demo (No Installation Required)
1. Open `demo.html` in your browser
2. See the gallery layout and instructions

### Option 2: Full System (Requires Node.js)

#### Prerequisites
- Node.js (download from [nodejs.org](https://nodejs.org/))

#### Installation & Setup
1. **Install Node.js** (if not already installed):
   - Download the LTS version from nodejs.org
   - Run the installer
   - Restart your computer

2. **Start the Server**:
   - Double-click `start-server.bat` in your project folder
   - The server will start on `http://localhost:3000`

3. **Open the Gallery**:
   - Go to: `http://localhost:3000/booking3.html`

4. **View Live Notifications** (optional):
   - Open: `http://localhost:3000/notifications.html`

## 📁 Files Overview

- `booking3.html` - Main gallery with booking functionality
- `notifications.html` - Real-time booking dashboard
- `server.js` - Backend API server
- `start-server.bat` - Easy server startup script
- `demo.html` - Static demo (works without server)

## ✨ Features

- 🎨 Beautiful responsive gallery
- 📱 Real-time booking updates
- 🔄 Unbook functionality
- 🏷️ Sold badges
- 📧 Live notifications dashboard
- 💾 Server-side booking storage
- 🎯 Multi-device synchronization

## 🛠️ Technical Stack

- **Frontend**: React, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Real-time**: Polling every 3 seconds
- **Storage**: In-memory (server-side)

## 🔧 Troubleshooting

**"Cannot connect to server"**
- Make sure Node.js is installed
- Run `start-server.bat`
- Check that port 3000 is not blocked

**Server won't start**
- Ensure Node.js is properly installed
- Try running `npm install` manually
- Check for error messages in the terminal

## 📞 Support

If you encounter issues:
1. Try the `demo.html` first
2. Install Node.js from nodejs.org
3. Run `start-server.bat`
4. Open the URLs mentioned above