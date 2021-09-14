import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from './containers/ItemListContainer';
import { HomeComponent } from './components/HomeComponent';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        {/* <NavBar/> */}
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/categoria/:cat" component={ItemListContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
