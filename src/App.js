import React from 'react'
import HomeContainer from './container/HomeContainer'
import './App.css';
import HeaderContainer from './container/HeaderContainer';

function App() {
  return (
    <div className="App">
   <HeaderContainer/>
    <HomeContainer/>
    </div>
  )
}

export default App