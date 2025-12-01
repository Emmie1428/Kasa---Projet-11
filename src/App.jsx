import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
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