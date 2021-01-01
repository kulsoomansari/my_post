import './App.css';
import Home from './components/Home';
import Post from './components/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <nav>
              <Link to="/">Home</Link>
              <Link to="/post">Post</Link>
        </nav>
        <Switch>
          <Route path="/post">
           <Post />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
