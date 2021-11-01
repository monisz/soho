import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from './containers/ItemListContainer';
import { HomeComponent } from './components/HomeComponent';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar/NavBar';
import { CartComponentContext } from './context/CartContext';

const App = () => {
  return (
    <CartComponentContext>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/categoria/:categoryFromUrl" component={ItemListContainer} />
          <Route path="/detalle/:title" component={ItemDetailContainer} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartComponentContext>
  );
}

export default App;