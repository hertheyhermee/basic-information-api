# Basic Information API

This is a simple REST API built with Node.js and Express that returns basic information including an email address, current datetime, and GitHub repository URL. This project was developed as part of the HNG12 internship Stage 0 task.

## Features

- Returns basic information in JSON format
- CORS enabled for cross-origin requests
- ISO 8601 formatted datetime
- Simple and lightweight implementation

## API Documentation

### Endpoint

```
GET /
```

### Response Format

```json
{
  "email": "tiamiyuhayzed@gmail.com",
  "current_datetime": "2024-02-06T12:00:00Z",
  "github_url": "https://github.com/hertheyhermee/basic-information-api.git"
}
```

### Response Fields

- `email`: tiamiyuhayzed@gmail.com
- `current_datetime`: Current UTC datetime in ISO 8601 format
- `github_url`: [URL to the project's GitHub repository](https://github.com/hertheyhermee/basic-information-api)

### Status Codes

- 200: Successful request
- 500: Server error

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/basic-information-api.git
   cd basic-information-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:
   ```
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. The API will be available at `http://localhost:3000`

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## Related Resources

For more information about Node.js development, visit: [HNG Node.js Developers](https://hng.tech/hire/nodejs-developers)
