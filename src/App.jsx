import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Nama from './Nama'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Fab } from '@mui/material'
import { AddIcCallRounded } from '@mui/icons-material'


function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        
        
        

      </div>
      
      <div className="card">
        <a href='/profile'>Profile</a>
        <div>
          <a href='/login'>login</a>
        </div>

        <Nama />
        <Counter label="Total Konter" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">

        Click on the Vite and React logos to learn more
      </p>

      <Fab color="primary" aria-label="add">
          <AddIcCallRounded />
        </Fab>
    </>
  )
}

export default App
