# Smart Library System

## Overview
The Smart Library System is a microservices-based application designed to manage users, books, and loans in a library environment. Each service operates independently, allowing for scalability and maintainability.

## Architecture
The system is composed of three main microservices:
- **User Service**: Manages user accounts and profiles.
- **Book Service**: Handles book inventory and related operations.
- **Loan Service**: Manages the loaning and returning of books.

## Services

### User Service
- **Description**: Responsible for user management, including registration, authentication, and profile updates.
- **Endpoints**:
  - `POST /users`: Create a new user
  - `GET /users/:id`: Retrieve user details
  - `PUT /users/:id`: Update user information

### Book Service
- **Description**: Manages the library's book inventory, including adding, updating, and searching for books.
- **Endpoints**:
  - `POST /books`: Add a new book
  - `GET /books`: Search for books
  - `GET /books/:id`: Retrieve book details
  - `PUT /books/:id`: Update book information
  - `DELETE /books/:id`: Remove a book from inventory

### Loan Service
- **Description**: Handles the loaning process, including issuing and returning books, and tracking loan history.
- **Endpoints**:
  - `POST /loans`: Issue a book to a user
  - `PUT /loans/:id/return`: Return a loaned book
  - `GET /loans/users/:userId`: Retrieve loan history for a user

## Getting Started
1. Clone the repository.
2. Navigate to each service directory (`user-service`, `book-service`, `loan-service`).
3. Install dependencies using `npm install`.
4. Start each service using `npm start`.

## Technologies Used
- Node.js
- Express.js
- MongoDB (or any other database of choice)
- Docker (optional for containerization)

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.