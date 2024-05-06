import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
  QueryCache
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CircularLoading from './components/CircularLoading.tsx'

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      staleTime: 60_000, //1 minuta
    }
  }
})

const AppLazy = React.lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Suspense fallback={<CircularLoading />}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <BrowserRouter>
          <AppLazy />
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>


  </React.StrictMode>,
)
