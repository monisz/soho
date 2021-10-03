import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from './containers/ItemListContainer';
import { HomeComponent } from './components/HomeComponent';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { Footer } from './components/Footer';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/categoria/:categoryFromUrl" component={ItemListContainer} />
        <Route path="/detalle/:title" component={ItemDetailContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
