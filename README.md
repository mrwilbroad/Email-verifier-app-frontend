# Email Verification Application

## Overview
This application provides a robust email verification system to ensure secure user authentication and validation. The system allows users to register, receive a verification email, and confirm their email addresses before gaining full access to the application.

## Technologies Used
### **Backend**
- **Spring Boot** – Used to develop the backend services, handling authentication, email verification, and user management.
- **GraphQL & RESTful API** – Provides flexible data fetching and communication with the frontend.
- **AWS Elastic Beanstalk** – The backend is deployed on AWS Elastic Beanstalk for scalability and easy management.

### **Frontend**
- **Angular** – A dynamic frontend framework used for the user interface and interactions.

### **Database**
- **AWS RDS (Relational Database Service)** – The system uses a relational database hosted on AWS RDS for efficient data storage and management.

## Features
- **User Registration** – Users can sign up by providing their email and other required details.
- **Email Verification** – An email is sent to the user with a verification link.
- **Secure Authentication** – Users can log in only after verifying their email.
- **GraphQL & REST API** – Supports both GraphQL and RESTful APIs for flexible client-side integration.
- **Scalable Deployment** – Hosted on AWS services for reliability and performance.

## Deployment
- **Backend**: Deployed on AWS **Elastic Beanstalk**.
- **Database**: Managed on **AWS RDS**.
- **Frontend**: Built with **Angular** and communicates with the backend APIs.

## Getting Started
### Prerequisites
Ensure you have the following installed:
- **Java 17** (or the required version for Spring Boot)
- **Node.js & Angular CLI**
- **AWS CLI** (for deployment management)

### Running the Backend Locally
```bash
# Clone the repository
git clone https://github.com/mrwilbroad/email-verification-app.git
cd email-verification-app

# Build and run the Spring Boot application
mvn spring-boot:run
```

### Running the Frontend Locally
```bash
cd frontend
npm install
ng serve
```

## API Endpoints
### GraphQL API
- **`/graphql`** – Supports flexible querying and mutations for email verification.

### REST API
- **`/api/auth/register`** – User registration
- **`/api/auth/verify-email?token=TOKEN`** – Email verification
- **`/api/auth/login`** – User authentication

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

---
**Developed by Wilbroad Francis Mark** 🚀

