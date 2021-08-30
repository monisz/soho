import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer } from './containers/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <NavBar/>
      </div> */}
      <Switch>
        <div className="App">
          <Route exact path="/" component={ItemListContainer} />
        </div>
      </Switch>
      {/* <div>
        <Footer/>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
