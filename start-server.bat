@echo off
echo ========================================
echo    Artwork Booking System Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is NOT installed!
    echo.
    echo Please install Node.js first:
    echo 1. Download: https://nodejs.org/dist/v18.17.1/node-v18.17.1-x64.msi
    echo 2. Run the installer
    echo 3. Restart your computer
    echo 4. Run this batch file again
    echo.
    pause
    exit /b 1
)

echo ✅ Node.js is installed!
echo.

echo Installing dependencies...
npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)

echo ✅ Dependencies installed!
echo.

echo Starting server...
echo ========================================
node server.js