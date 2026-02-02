import React from 'react'
import Header from './components/Header/Header.jsx'
import './App.css'
import { useState } from 'react';
import Container from './components/Container/Container.jsx'


function App() {
   
  const [login,setLogin] = useState(false);
  return (
    <div className="App">
      <Header login={login} setLogin = {setLogin}/>
      {/* <Product /> */}
     <Container login={login} setLogin = {setLogin} />
    </div>
  )
}

export default App
