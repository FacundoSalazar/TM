import React from 'react'
import ReactDOM from 'react-dom/client'
import { TeamMate } from './TeamMate'
import './styles/TeamMate.scss'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TeamMate />
    </BrowserRouter>
  </React.StrictMode>,
)
