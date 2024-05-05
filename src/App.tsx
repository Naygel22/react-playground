import './App.css'
import { Browse } from './components/Browse';
import { LoggedUser } from './components/LoggedUser';
import { UserProvider } from './contexts/UserProvider';



function App() {

  return (
    <div>
      <UserProvider>
        <Browse />
        <LoggedUser />
      </UserProvider>
    </div>
  )
}

export default App
