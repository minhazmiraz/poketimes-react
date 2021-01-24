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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
