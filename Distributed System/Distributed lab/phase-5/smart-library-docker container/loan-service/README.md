# Loan Service

The Loan Service is a microservice responsible for managing book loans in the Smart Library System. It handles operations related to issuing and returning books, as well as tracking user loan history.

## Features

- Issue a book to a user
- Return a book
- Retrieve a user's loan history

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the loan-service directory**:
   ```
   cd smart-library-system/loan-service
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the service**:
   ```
   npm start
   ```

## API Endpoints

### Issue a Book
- **POST** `/loans`
- Request Body: 
  ```json
  {
    "user_id": "string",
    "book_id": "string",
    "due_date": "date"
  }
  ```

### Return a Book
- **PUT** `/loans/:id/return`
- Path Parameters:
  - `id`: Loan ID

### Get User Loan History
- **GET** `/loans/user/:user_id`
- Path Parameters:
  - `user_id`: User ID

## Dependencies

- Express
- Mongoose (for MongoDB interaction)
- Other necessary libraries as specified in `package.json`

## License

This project is licensed under the MIT License.