import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/abt';
import Contact from './Components/Contact/contact';
import { BrowserRouter as Router , Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Home} />
    <Route exact path="/abt" component ={About} />
    <Route exact path="/contact" component ={Contact} />
      </div>
    </Router>
  );
}

export default App;