# My Budget

## Overview

This project was developed to create a full-stack web application for managing personal finances. The application allows users to track income and expenses, view financial summaries, and analyze financial data. It adheres to specified requirements and best practices in software development.

## Assignment Requirements

- **Technology Stack**:
  - Backend: Spring Boot, Spring Data JPA
  - Frontend: Angular
  - Database: H2 (in-memory)
  - Build Tool: Maven
- **Functional Requirements**:
  - CRUD operations for income and expenses
  - Financial summary display
  - Date-based filtering of records
  - Integration with an external exchange rate API (if applicable)
- **Non-Functional Requirements**:
  - Responsive and user-friendly UI
  - Proper error handling and validation
  - Code documentation and adherence to clean code principles
- **Deployment**:
  - The application is deployed on Render with separate links for the frontend and backend.

## Project Structure

The project is divided into two main parts:

- **Backend**: Located in the `backend/` directory, built with Spring Boot.
- **Frontend**: Located in the `frontend/` directory, built with Angular.

## Live Links

- **Frontend**: [https://my-budget-frontend.onrender.com/](https://my-budget-frontend.onrender.com/)
- **Backend**: [https://my-budget-backend.onrender.com/](https://my-budget-backend.onrender.com/)

## Features

- **Income Tracking**: Users can add, update, and delete income entries.
- **Expense Tracking**: Users can add, update, and delete expense entries.
- **Financial Summary**: Displays total income, expenses, and recent transactions.
- **Date Filtering**: Allows filtering of income and expense entries by date range.

## Installation & Setup

### Backend

1. **Clone the Repository**
   git clone https://github.com/Iksich/my-budget.git
Navigate to the Backend Directory

cd my-budget/backend
Install Dependencies

mvn install
Run the Application

mvn spring-boot:run
The backend server will be available at http://localhost:8080.

Frontend
Navigate to the Frontend Directory

cd my-budget/frontend
Install Dependencies

npm install
Run the Application

ng serve
The frontend will be available at http://localhost:4200.

API Endpoints
Detailed information on API endpoints and their usage:

Income
GET /api/income - Retrieve all income entries.
POST /api/income - Create a new income entry.
GET /api/income/{id} - Retrieve an income entry by ID.
PUT /api/income/{id} - Update an income entry by ID.
DELETE /api/income/{id} - Delete an income entry by ID.
Expense
GET /api/expense - Retrieve all expense entries.
POST /api/expense - Create a new expense entry.
GET /api/expense/{id} - Retrieve an expense entry by ID.
PUT /api/expense/{id} - Update an expense entry by ID.
DELETE /api/expense/{id} - Delete an expense entry by ID.
Configuration
The application uses H2 as an in-memory database. Configuration settings can be modified in the src/main/resources/application.properties file.

Evaluation Criteria
Functionality: All specified features are implemented and work as expected.
Code Quality: The project follows clean code principles, with proper documentation and a clear structure.
User Experience: The frontend is responsive, intuitive, and provides a good user experience.
Deployment: The application is fully deployed and accessible online.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please reach out to ilija.pejanovicc@gmail.com
