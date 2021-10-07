import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
