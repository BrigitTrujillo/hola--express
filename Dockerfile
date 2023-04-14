FROM node:latest
RUN git clone -q 
WORKDIR app -q https://github.com/BrigitTrujillo/Express-BrigitTf.git
COPY package*.json ./
RUN npm install > /dev/null
COPY . .
EXPOSE 9000
CMD ["node", "app.js"]
