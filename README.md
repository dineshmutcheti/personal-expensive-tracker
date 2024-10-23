# Personal Expense Tracker API

This is a simple Personal Expense Tracker API built with Node.js, Express.js, and MySQL. The API allows users to manage their expenses and track their financial activities.

## Features

- Add, update, and delete transactions.
- Retrieve all transactions or specific transactions by ID.
- Get a summary of transactions categorized by type.


## Setup and Run Instructions

### Prerequisites

- Node.js (version 14 or later)
- MySQL database

### Clone the Repository

```bash
git clone https://github.com/dineshmutcheti/personal-expensive-tracker.git

##Install Dependencies
avigate to the project directory and install the required packages:
cd personal-expensive-tracker
npm install
Set Up Environment Variables
Create a .env file in the root of the project and add the following variables:
DB_HOST=localhost
DB_USER=root
DB_PASS=Dinesh@4592
DB_NAME=expense_tracker
Run the Application
npm start
The API will be running at http://localhost:3000.
API Documentation
Authentication
Authorization: The API uses JWT for authentication. Include the token in the Authorization header for protected routes.
Transactions
POST /transactions: Add a new transaction.
{
  "type": "expense",
  "category_id": 1,
  "amount": 100,
  "date": "2024-10-23",
  "description": "Groceries"
}
GET /transactions: Get all transactions.

GET /transactions/:id: Get a transaction by ID.

PUT /transactions/:id: Update a transaction by ID.

{
  "type": "expense",
  "category_id": 1,
  "amount": 120,
  "date": "2024-10-23",
  "description": "Groceries Updated"
}
DELETE /transactions/:id: Delete a transaction by ID.

GET /transactions/summary: Get a summary of transactions categorized by type.License
This project is licensed under the MIT License.

Feel free to modify any parts of this template to better suit your project’s specifics!
post man screen shots


