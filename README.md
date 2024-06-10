# RESTful API

This project is a RESTful API built with Node.js and Express. The API allows you to upload a PDF file, extract the first 30 lines of text from it, and send an email with the extracted content to a specified email address.

**Table of Contents**

- [RESTful API](#restful-api)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [POST /api/upload](#post-apiupload)
      - [Request](#request)
      - [Example Request](#example-request)
      - [Response](#response)
  - [Environment Variables](#environment-variables)
    - [Using Gmail for Email Sending](#using-gmail-for-email-sending)
  - [Project Structure](#project-structure)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/matiasafur/rocketbot-restful-api.git
    cd rocketbot-restful-api
    ```

2. Install the dependencies:

    ```sh
    npm install express multer nodemailer pdf-parse-fork dotenv
    ```

3. Create a `.env` file in the root directory and configure your environment variables as shown in the [Environment Variables](#environment-variables) section.

## Usage

1. Start the server:

    ```sh
    npm start
    ```

2. The server will run on `http://localhost:3000`.

3. Use an API client like Postman or `curl` to interact with the API.

## Endpoints

### POST /api/upload

#### Request

- **URL**: `/api/upload`
- **Method**: `POST`
- **Headers**: `Content-Type: multipart/form-data`
- **Body**:
  - `file`: The PDF file to upload.
  - `email`: The email address to send the extracted text to.

#### Example Request

**Using `curl`:**
```sh
curl -X POST http://localhost:3000/api/upload \
-F "file=@path/to/your/file.pdf" \
-F "email=recipient@example.com"
```
  
**Using Postman**

1.  Open Postman and create a new POST request.
2.  Set the URL to `http://localhost:3000/api/upload`.
3.  In the `Body` tab, select `form-data`.
4.  Add a key named `file`, set its type to `File`, and select your PDF file.
5.  Add a key named `email` and set its value to the recipient's email address.
6.  Send the request.

#### Response

-   **Success**:
```sh
{
  "success": true,
  "message": "The email has been successfully sent to example@example.com"
}
 ```
    
-   **Error**:
```sh
{
  "success": false,
  "message": "An error has occurred processing your request"
}
```

## Environment Variables
Create a .env file in the root directory and add the following environment variables:

```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
MAIL_FROM=your-email@gmail.com
```

- `MAIL_HOST`: SMTP host for the email service.
- `MAIL_PORT`: SMTP port.
- `MAIL_USER`: Your email address.
- `MAIL_PASS`: Your email password or app-specific password.
- `MAIL_FROM`: The email address that will appear in the "from" field.

### Using Gmail for Email Sending
To use Gmail as your email service, follow these steps:

Use an App Password:
   * Go to your Google Account Security Settings.
   * Scroll down to "App passwords" or search for "applications passwords" in your Google account settings (you might need to enable 2-Step Verification first).
   * Generate an app password and use this password in the MAIL_PASS field in your .env file.

## Project Structure
```bash
rocketbot-restful-api/
├── src/
│   ├── controllers/
│   │   ├── index.js
│   │   └── pdfController.js
│   ├── routes/
│   │   └── index.js
│   ├── utils/
│   │   ├── emailUtils.js
│   │   ├── index.js
│   │   └── pdfUtils.js
│   └── app.js
├── .env
├── .gitignore
├── README.md
├── package.json
└── server.js

```