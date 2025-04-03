import React from 'react'
import TechnicalLandingPage from './Pages/TechnicalLandingPage'
import EnvironmentLandingPage from './Pages/EnvironmentLandingPage'
import GameLandingPage from './Pages/GameLandingPage'
import AgencyLandingPage from './Pages/AgencyLandingPage'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <><Navbar /><div>
      <TechnicalLandingPage />
      <div className='p-6'></div>
      <EnvironmentLandingPage />
      <div className='p-6'></div>
      <GameLandingPage />
      <div className='p-6'></div>
      <AgencyLandingPage />
    </div></>
  )
}

export default App