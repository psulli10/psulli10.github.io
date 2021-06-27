import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import CodeContainer from './containers/CodeContainer';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
    <Router>
      <div id='grid-container'> 
        <nav id='nav-bar'>
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
        <Footer/>
      </div>
    </Router>
    
    </div>
  );
}

export default App;
