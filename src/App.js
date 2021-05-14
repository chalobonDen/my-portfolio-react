import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skill from './pages/Skill';
import { useState } from 'react';
function App() {
  const [manuDropdown, setManuDropdown] = useState(false);

  const navToggler = () => {
    setManuDropdown(manuDropdown === false ? true : false);
    console.log(manuDropdown);
  };

  return (
    <div>
      <Router>
        <Header manuDropdown={manuDropdown} navToggler={navToggler} />
        {/* <SideBar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/skill">
            <Skill />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
