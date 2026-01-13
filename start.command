#!/bin/bash
cd "$(dirname "$0")"
echo "Starting 刑冲速查 (XingChongSuCha)..."

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Install dependencies if missing
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the dev server and open browser
echo "Launching application..."
npm run dev -- --open
