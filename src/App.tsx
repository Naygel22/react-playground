import './App.css'
import { Browse } from './components/Browse';
import ErrorBoundary from './components/ErrorBoundary';
import { LoggedUser } from './components/LoggedUser';
import { NotificationProvider } from './contexts/NotificationContext';
import { UserProvider } from './contexts/UserContext';



function App() {

  return (
    <div>
      <ErrorBoundary>
        <NotificationProvider>
          <UserProvider>
            <LoggedUser />
            <Browse />
          </UserProvider>
        </NotificationProvider>

      </ErrorBoundary>

    </div>
  )
}

export default App
