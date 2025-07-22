#!/bin/bash
# Deployment script for Medusa Worker Mode
# This script should be used as your start command on your hosting provider

echo "Starting Medusa Worker Mode deployment..."
echo "Current directory: $(pwd)"

# Navigate to the built server directory
cd .medusa/server

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the application (no predeploy for worker mode)
echo "Starting Medusa worker..."
npm run start
