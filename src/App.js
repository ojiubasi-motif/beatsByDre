
import Home from './components/home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  const [isOpen, setIsopen] = useState(false);
    
  const toggleMenu = ()=>{
      setIsopen(!isOpen);
      console.log(isOpen);
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isOpen={isOpen} toggle={toggleMenu}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
