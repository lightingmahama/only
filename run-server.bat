@echo off
echo ========================================
echo    Installing Dependencies...
echo ========================================
echo.

"C:\Program Files\nodejs\npm.cmd" install

if errorlevel 1 (
    echo ❌ Failed to install dependencies!
    pause
    exit /b 1
)

echo ✅ Dependencies installed!
echo.

echo ========================================
echo    Starting Server...
echo ========================================
echo.

"C:\Program Files\nodejs\node.exe" server.js