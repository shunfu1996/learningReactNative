
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import Start from './components/Start/Start';
import LogIn from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import Quiz from './components/Quiz/Quiz';
import Record from './components/Record/Record';
import { ProgressBar } from 'react-bootstrap';

function App() {

  // const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  // const [random, setRandom] = useState(Math.floor(Math.random() * 50));
  const [progressNum, setProgressNum] = useState(0);

  useEffect(() => {
    setInterval(() => setProgressNum(prev => prev + Math.floor(Math.random() * 100)), 500)
    setTimeout(() => {
      setIsLoading(false);
      clearInterval(setProgressNum);
    }, 2000);
  // }, [navigate]);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ?
        <div className='isLoading'>
          <ProgressBar animated now={progressNum} />
        </div>
        :
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/record' element={<Record />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
