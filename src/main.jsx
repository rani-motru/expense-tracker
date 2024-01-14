import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ActiveProvider} from '../src/context/ActiveContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActiveProvider>
    <Router >
      <App />
    </Router>
    </ActiveProvider>
  </React.StrictMode>,
)
