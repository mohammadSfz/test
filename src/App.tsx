import { useState } from 'react'
import { CookiesProvider } from 'react-cookie';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"

import './App.css'

import Home from './pages/home'
import Auth from './pages/auth';
import { useAuth } from './contexts/auth';



function App() {
  const { auth } = useAuth();
  
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <BrowserRouter>
          <Routes>
            <Route >
              <Route
                path="/"
                element={
                 auth?<Home/>:<Navigate to="/login"/>
                }
              />
              <Route path="/login" element={<Auth />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  )
}

export default App
