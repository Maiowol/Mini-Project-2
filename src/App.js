import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

//components
import Main from './pages/Main';
import Main2 from './pages/Main2';
import SignUp from './pages/SignUp';
import Detail from './pages/Detail';
import Add from './pages/Add';

function App() {

  const [signIn, setSignIn] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token == null ? setSignIn(false) : setSignIn(true);
  }, []);


  return (
    <Routes>
       {signIn ? (
         <Route path="/" element={<Main2 />} /> 
       ) : (<Route exact path="/" element={<Main />} />)}
       <Route exact path="/postid" element={<Detail />} />
       <Route exact path="/post" element={<Add />} />
       <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
