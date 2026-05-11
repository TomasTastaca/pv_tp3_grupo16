import './css/styles.css';
import './css/listaProyectos.css';
import './css/layout.css';
import ListaProyectos from './components/ListaProyectos'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return(
    <div>
      <Header/>
      <Nav/>
      <main>  
        <ListaProyectos/>
      </main>
      <Footer/>
    </div>
  )
}

export default App