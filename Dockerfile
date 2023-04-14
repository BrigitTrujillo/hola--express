FROM node:latest
RUN git clone -q 
COPY package*.json ./
RUN npm install > /dev/null
COPY . .
EXPOSE 9000
CMD ["node", "app.js"]
