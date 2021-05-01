import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Dessert from "./components/Dessert";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/' exact />
        <Route component={Dessert} path='/dessert' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
