import './App.css'
import { Browse } from './components/Browse';
import ErrorBoundary from './components/ErrorBoundary';
import { LoggedUser } from './components/LoggedUser';
import { NotificationProvider } from './contexts/NotificationContext';
import { UserProvider } from './contexts/UserContext';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {

  return (
    <div>
      <ErrorBoundary>
        <NotificationProvider>
          <Provider store={store}>
            <UserProvider>
              <LoggedUser />
              <Browse />
            </UserProvider>
          </Provider>
        </NotificationProvider>
      </ErrorBoundary>

    </div>
  )
}

export default App
