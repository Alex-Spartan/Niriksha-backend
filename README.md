# Niriksha Backend

A Node.js and Express.js backend API for the Niriksha application.

## 🚀 Features

- RESTful API architecture
- Express.js framework
- CORS enabled
- Security headers with Helmet
- Request logging with Morgan
- Environment configuration with dotenv
- Mock authentication system
- User management endpoints
- Graceful shutdown handling
- Health check endpoint

## 📁 Project Structure

```
niriksha-backend/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── api.js
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/
│   ├── config/
│   └── app.js
├── server.js
├── package.json
├── .env
├── .env.example
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd niriksha-backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

## 📋 Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm test` - Run tests (to be configured)
- `npm run lint` - Run linting (to be configured)

## 🌐 API Endpoints

### Health Check
- `GET /health` - Server health status

### API Documentation
- `GET /api/docs` - API documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify token

### Users
- `GET /api/users` - Get all users (with pagination and search)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## 🔧 Configuration

The application uses environment variables for configuration. Copy `.env.example` to `.env` and configure:

- `PORT` - Server port (default: 3000)
- `HOST` - Server host (default: localhost)
- `NODE_ENV` - Environment mode (development/production)

## 🔒 Authentication

Currently using mock authentication for demonstration. In production, implement:
- JWT tokens
- Password hashing with bcrypt
- Proper session management
- Rate limiting

## 🚀 Deployment

1. Set `NODE_ENV=production`
2. Configure production environment variables
3. Start with `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.