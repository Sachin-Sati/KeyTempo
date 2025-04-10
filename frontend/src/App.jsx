import './App.css'
import TypingForm from './components/TypingForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './utils/AuthContext';

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<TypingForm />} />
            <Route path='/register' element={<RegisterForm/>} />
            <Route path='/login' element={<LoginForm/>} />
          </Routes>
        <Footer />
      </AuthProvider>
    </Router>
    </>
  )
}

export default App
