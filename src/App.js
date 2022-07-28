import './App.css';
import Welcome from './components/Welcome';
import Signin from './components/Signin'
import PasswordReset from './components/PasswordReset'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Corperate from './components/Corperate';
import Newuser from './components/Newuser';
import CoperateLogin from './components/CoperateLogin';
import UserValidation from './components/UserValidation';
import CoperateVerify from './components/CoperateVerify';
import Successful from './components/Successful';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='password-reset/otp-validation' element={<PasswordReset />} />
          <Route path='dashboard/market/order-book' element={<Dashboard />} />
          <Route path='register/individual/basic-information' element={<Register />} />
          <Route path='register/corporate/company-information' element={<Corperate />} />
          <Route path='register/individual/login-details' element={<Newuser />} />
          <Route path='register/corporate/login-details' element={<CoperateLogin />} />
          <Route path='register/individual/otp-verification' element={<UserValidation />} />
          <Route path='register/corporate/otp-verification' element={<CoperateVerify />} />
          <Route path='register/individual/registration-successful' element={<Successful />} />
        </Routes>
        <div className="chat">
          <img src="/../images/chat.svg" alt="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
