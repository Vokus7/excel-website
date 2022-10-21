import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Blogspot from './components/Pages/Blogspot';
import Home from './components/Pages/Home';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <Router>
      <div>
      <SocialLinks />
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogspot">
            <Blogspot />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
