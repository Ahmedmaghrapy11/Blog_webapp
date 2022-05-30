import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// component function
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/create">
              <Create />
            </Route>
            
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          <Route path="*">
            <NotFound />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
