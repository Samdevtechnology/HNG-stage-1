# Simple Check API

A simple check API endpoint built with Next.js that returns basic service information including email contact, current timestamp, and repository URL. This API is designed to monitor service status and provide essential service metadata.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Documentation](#api-documentation)
  - [Simple Check Endpoint](#simple-check-endpoint)
    - [Success Response](#success-response)
    - [Response Fields](#response-fields)
    - [Example Usage](#example-usage)
- [Tech Stack](#tech-stack)

## Features

- Returns service status and metadata in JSON format
- Implements CORS for cross-origin requests
- Provides ISO 8601 formatted timestamps
- Supports standard HTTP status codes

## Setup

1. Clone the repository:
   \```bash
   git clone <your-repository-url>
   \```

2. Install dependencies:
   \```bash
   npm install
   \```

# or

yarn install

# or

pnpm install

3. Run the development server:
   \```bash
   npm run dev
   \```

# or

yarn dev

# or

pnpm dev

## The API will be available at `http://localhost:3000/api`.

## API Documentation

### Simple Check Endpoint

**URL**: `/api`

**Method**: `GET`

**CORS**: Enabled

#### Success Response

**Code**: `200 OK`

**Content example**:
\```json
{
"email": "samdevtechnology@gmail.com",
"timestamp": "2025-01-31T12:34:56.789Z",
"gitUrl": "The GitHub URL of the project's codebase"
}
\```

#### Response Fields

| Field     | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| email     | string | Contact email for service support      |
| timestamp | string | Current server time in ISO 8601 format |
| gitUrl    | string | GitHub repository URL for the project  |

#### Example Usage

Using curl:
\```bash
curl http://localhost:3000/api
\```

Using JavaScript fetch:
\```javascript
fetch('http://localhost:3000/api')
.then(response => response.json())
.then(data => console.log(data));
\```

## Tech Stack

This project is built using [Next.js](https://nextjs.org/) with TypeScript. It's a project of HNG internship (Stage 1 project) [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers).
