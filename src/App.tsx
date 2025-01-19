import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRegistrationForm from './form/UserRegistrationForm';

const App: React.FC = () => {
  const handleRegister = (username: string, password: string) => {
    console.log('Registered User:', { username, password });
  };
 

  return (
    <>
    <div>
      
    </div>
     <div>
      <h1>User Registration</h1>
      <UserRegistrationForm onRegister={handleRegister} />
    </div>
    </>
  )
}

export default App
