import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
