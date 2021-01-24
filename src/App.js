import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Post from "./component/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
