import { useState } from 'react';
import './App.css'
import { Browse } from './components/Browse';
import { UserContext } from './contexts/UserContext';



function App() {
  const [isLogged, setIsLogged] = useState();

  return (
    <div>
      <UserContext.Provider value={{ isLogged, setIsLogged }}>

        <Browse />
      </UserContext.Provider>
    </div>
  )
}

export default App
