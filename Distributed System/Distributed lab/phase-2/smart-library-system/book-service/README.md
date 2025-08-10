# Smart Library System - Book Service

## Overview
The Book Service is a microservice responsible for managing book-related operations within the Smart Library System. It provides functionalities to add, search, update, and delete books.

## Features
- Add new books to the library
- Search for books by title, author, or ISBN
- Retrieve details of a specific book
- Update book information
- Delete books from the library

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the book-service directory:
   ```
   cd smart-library-system/book-service
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the Book Service:
   ```
   npm start
   ```

## API Endpoints
- **POST /books**: Add a new book
- **GET /books**: Search for books
- **GET /books/:id**: Get details of a specific book
- **PUT /books/:id**: Update book information
- **DELETE /books/:id**: Delete a book

## Dependencies
- Express: Web framework for Node.js
- Mongoose: MongoDB object modeling tool

## Author
- [Your Name] - [Your Contact Information]