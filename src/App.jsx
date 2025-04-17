import { useState } from 'react';
import './App.css';
import LoginForm from './obsolete/Login';
import sendLogin from './apiLogin';
import LoginGPT from './LoginGPT';
import CaseReport from './obsolete/CaseReport';
import RadioGroupExample from './obsolete/RadioGPT';
// import MultiStepForm from './ReportPage/obsolete/MultiStepForm_o';
import TwoOptionRadio from './obsolete/TwoOptionRadio';
import MultiStepForm from './ReportPage/MultiStepForm';
import ExpandableCheckboxForm from './ReportPage/expandCheckGPT';
import ThaiAddressForm from './ReportPage/GPT/thaiad';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './Thankyou';
import LoginPage from './LogInPage/Login';
import AdminDashboard from './AdminPage/adminDashboard';

function App() {
  const [Login, setLogin] = useState();

  const showInfo = 'hellower';

  const userInput = (name, password) => {
    name, password;
  };

  const handleSubmit = async (term) => {
    const result = await sendLogin(term);

    setLogin(result);
  };

  return (
    // <>
    //   {/* <LoginForm onSubmit={handleSubmit} /> */}
    //   {/* <LoginGPT /> */}
    //   {/* <CaseReport /> */}
    //   {/* <RadioGroupExample /> */}
    //   <MultiStepForm />
    //   {/* <TwoOptionRadio header='test' /> */}
    //   {/* <ExpandableCheckboxForm /> */}
    //   {/* <ThaiAddressForm /> */}
    // </>

    <Router>
      <Routes>
        <Route path='/' element={<MultiStepForm />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/admin' element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
