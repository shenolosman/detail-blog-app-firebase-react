import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Blog from "./pages/blog/Blog";
import Search from "./pages/search/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Switch>
          <Route path="/blog/:id">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
