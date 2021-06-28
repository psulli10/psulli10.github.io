import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutContainer from './containers/AboutContainer';
import CodeContainer from './containers/CodeContainer';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id="app">
    <Router>
      <div id='grid-container'> 
        <NavBar/>
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
