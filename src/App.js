import { BrowserRouter, Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePost";
import Dinner from "./components/Dinner";
import NavBar from "./components/NavBar";
import Dessert from "./components/Dessert";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={SinglePost} path='/recipe/:slug' />
        <Route component={Dinner} path='/' exact />
        <Route component={Dessert} path='/dessert' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
