#!/bin/bash
# Deployment script for Medusa Server Mode
# This script should be used as your start command on your hosting provider

echo "Starting Medusa Server Mode deployment..."
echo "Current directory: $(pwd)"

# Navigate to the built server directory
cd .medusa/server

# Install dependencies
echo "Installing dependencies..."
npm install

# Run predeploy script (migrations)
echo "Running database migrations..."
npm run predeploy

# Start the application
echo "Starting Medusa server..."
npm run start
