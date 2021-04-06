import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/' exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
