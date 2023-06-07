import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './AuthProvider'
import 'tailwindcss/tailwind.css';
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className='md:max-w-screen-2xl py-2'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
  </AuthProvider>
)
