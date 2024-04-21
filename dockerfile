# Use the official Node.js 14 image as base
FROM node:14
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package.json ./
# Install npm dependencies
RUN npm install
# Rebuild bcrypt specifically for ARM architecture
RUN npm rebuild bcrypt --build-from-source
# Copy the rest of the application code to the working directory
COPY . .
# Expose the port your app runs on
EXPOSE 8000
# Command to run your application
CMD ["node", "app.js"]
