import './css/styles.css';
import './css/listaProyectos.css';
import './css/layout.css';
import './css/registroActividad.css';
import ListaProyectos from './views/ListaProyectos';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
//nuevos import para ruta 
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import DetalleProyecto from './views/DetalleProyecto';
import Dashboard  from './views/Dashboard';
import PerfilUsuario from './views/PerfilUsuario';


const App = () => {
  return(
    <Router>
    <div>
      <Header/>
      <Nav/>
      <main>  
        <Routes>
          <Route path="/" element={<Navigate to="/Inicio"/>}/>
          <Route path="/Inicio" element={<Dashboard/>}/>
          <Route path="/Proyectos" element={<ListaProyectos/>}/>
          {/*"ruta dinamica" para ver los distinto de tipos de proyectos, en este caso tenemos 5*/}
          <Route path="/Proyectos/:id" element={<DetalleProyecto/>}/>
         
          <Route path="/Perfil" element={<PerfilUsuario/>}/>

          {/* <ListaProyectos/> */}
        </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  )
}

export default App