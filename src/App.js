import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import DetallePersonaje from './DetallePersonaje';
import MainMenu from './MainMenu';



 function App() {
  return (
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={ Header } />
          <Route path="/personajes/:id" exact component={ DetallePersonaje } />
          <Route path="/personajes" exact component={ Contenedor } />
          <Route path="/contacto" exact component={ Contacto } />
          
          <Route component={ ()=>(
            <h1>Pagina no encontrada</h1>
          ) } /> 
        </Switch>
        
      </Router>
    )
}




export default App;
