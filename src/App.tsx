import './App.css'
import { Browse } from './components/Browse';
import ErrorBoundary from './components/ErrorBoundary';
import { LoggedUser } from './components/LoggedUser';
import { UserProvider } from './contexts/UserProvider';



function App() {

  return (
    <div>
      <ErrorBoundary>
        <UserProvider>
          <LoggedUser />
          <Browse />
        </UserProvider>
      </ErrorBoundary>

    </div>
  )
}

export default App
