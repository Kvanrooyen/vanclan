import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/' exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
