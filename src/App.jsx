import React from 'react'
import TechnicalLandingPage from './Pages/TechnicalLandingPage'
import EnvironmentLandingPage from './Pages/EnvironmentLandingPage'

const App = () => {
  return (
    <div> 
    <TechnicalLandingPage/>
    <div className='p-6'></div>
    <EnvironmentLandingPage/>
    </div>
  )
}

export default App