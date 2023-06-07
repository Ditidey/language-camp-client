import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './AuthProvider'
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className='md:max-w-screen-2xl py-2'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  </AuthProvider>
)
