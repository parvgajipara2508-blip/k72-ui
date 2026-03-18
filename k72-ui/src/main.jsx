import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import StairsAnimation from './component/StairsAnimation.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StairsAnimation>
      <App />
    </StairsAnimation>

  </BrowserRouter>

)
