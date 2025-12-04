import { Routes, Route} from 'react-router-dom'
import Accueil from '../Pages/Accueil/Accueil'
import Logement from "../Pages/Logement/Logement"
import APropos from '../Pages/APropos/APropos'
import Error from '../Pages/Error/Error'


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Router