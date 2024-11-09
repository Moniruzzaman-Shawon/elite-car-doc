import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react';
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <StrictMode>
      <AuthProvider>

        <RouterProvider router={router} />

      </AuthProvider>
    </StrictMode>,
  </div>
)
