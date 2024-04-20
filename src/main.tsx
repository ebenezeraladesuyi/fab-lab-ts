import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Router';
import IsLoading from './pages/isLoading/IsLoading';
// import IsLoading from './pages/IsLoading/Islooading';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<IsLoading />}>
      <RouterProvider router={element} />
    </Suspense>
  </React.StrictMode>,
)
