import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <Switch>
       <Route path="/Home" exact component={Home}/>
       <Route path="/Courses" exact component={Courses}/>
       <Route path="/Contact" exact component={Contact}/>
       <Route path="/About" exact component={About}/>
    
       <Redirect from="/" to="/Home"/>
    </Switch>
  </Router>
  );
}

export default App;
