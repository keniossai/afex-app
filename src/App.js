import './App.css';
import Welcome from './components/Welcome';
import Signin from './components/Signin'
import PasswordReset from './components/PasswordReset'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='sign-in/password-reset/otp-validation' element={<PasswordReset />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <div className="chat">
          <img src="../images/chat.svg" alt="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
