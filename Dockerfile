FROM node:20

WORKDIR /app 

COPY package*.json ./ 

# Install dependencies
RUN npm install

COPY . .

# Expose port 3000
EXPOSE 3000

# Run the React development server
CMD [ "npm", "start" ]
