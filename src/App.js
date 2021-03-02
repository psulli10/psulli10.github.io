import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import CodeContainer from './containers/CodeContainer';
import HomeContainer from './containers/HomeContainer';


function App() {
  return (
    <div class="App">

    <Router>
      <div> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/code">Code</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <AboutContainer />
          </Route>
          <Route path="/code">
            <CodeContainer />
          </Route>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
