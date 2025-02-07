const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Main route
app.get('/', (req, res) => {
  const response = {
    email: "tiamiyuhayzed@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/hertheyhermee/basic-information-api.git"
  };
  
  res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 
