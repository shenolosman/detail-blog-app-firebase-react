import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Blog from "./pages/blog/Blog";
import Search from "./pages/search/Search";
import {Navbar,ThemeSelector} from "./components"
import "./App.css"
import {useTheme} from "./hooks/useTheme"
function App() {
  const {mode}=useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector/>
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
