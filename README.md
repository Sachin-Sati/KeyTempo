# KeyTempo

KeyTempo is a full-stack web application that tracks typing speed and adjusts audio playback based on typing pace.

## Features

- Real-time typing speed tracking (keystrokes per second)
- Dynamic audio playback speed adjustment
- User authentication (Register/Login)
- JWT-based authorization
- Clean, responsive interface
- Visual feedback for typing metrics
- Mobile-responsive design

## Tech Stack

### Frontend
- React + Vite
- Bootstrap 5
- React Router DOM
- Howler.js (audio playback)
- Context API (state management)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT (JSON Web Tokens)
- Bcrypt (password hashing)

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/KeyTempo.git
cd KeyTempo
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Environment Setup
Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

4. Start the development servers
```bash
# Start backend server (from root directory)
npm run dev

# Start frontend server (from frontend directory)
cd frontend
npm run dev
```

## Usage

1. Register an account or login
2. Navigate to the typing area
3. Start typing in the text area
4. Watch your typing speed metrics update in real-time
5. Use Play/Pause buttons to control audio playback
6. Audio playback speed adjusts automatically based on typing speed

## Development

This project uses:
- Vite for frontend development with HMR
- Nodemon for backend auto-reloading
- ESLint for code linting
- Cross-env for environment variables

### Available Scripts

Backend (root directory):
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run build` - Build frontend for production

Frontend (frontend directory):
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request