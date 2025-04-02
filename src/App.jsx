import React from 'react'
import TechnicalLandingPage from './Pages/TechnicalLandingPage'
import EnvironmentLandingPage from './Pages/EnvironmentLandingPage'
import GameLandingPage from './Pages/GameLandingPage'

const App = () => {
  return (
    <div> 
    <TechnicalLandingPage/>
    <div className='p-6'></div>
    <EnvironmentLandingPage/>
    <div className='p-6'></div>
    <GameLandingPage/>
    </div>
  )
}

export default App