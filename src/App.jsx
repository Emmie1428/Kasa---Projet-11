import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Router from './Components/Router'
import './App.scss'

function App() {
  return ( 
  <div className="app">
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </div>
  )
}

export default App