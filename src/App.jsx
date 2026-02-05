import React from 'react'
import Header from './components/Header/Header.jsx'
import './App.css'
import { useState } from 'react';
import Container from './components/Container/Container.jsx'
import LoginStatusContext from './pages/Registration/LoginStatusContext.jsx';


function App() {
   
  const [login,setLogin] = useState(false);
  return (
    <div className="App">

        <LoginStatusContext.Provider value={[{login,setLogin}]} >
       <Header />
      {/* <Product /> */}
     <Container />
      </LoginStatusContext.Provider>
     
    </div>
  )
}

export default App
