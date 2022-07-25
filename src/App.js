import './App.css';
import Welcome from './components/Welcome';
import Signin from './components/Signin'
import PasswordReset from './components/PasswordReset'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='signin' element={<Signin />} />
          <Route path='/sign-in/password-reset/otp-validation' element={<PasswordReset />} />
        </Routes>
        <div className="chat">
          <img src="../images/chat.svg" alt="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
