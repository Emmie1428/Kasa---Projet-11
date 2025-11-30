import { StrictMode } from 'react'
import { createRoot  } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import APropos from './Page/APropos/APropos'
import Accueil from './Page/Accueil/Accueil.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)

export default createRoot