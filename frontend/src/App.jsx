import './App.css'
import TypingForm from './components/TypingForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/home' element={<TypingForm />} />
          <Route path='/register' element={<RegisterForm/>} />
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
