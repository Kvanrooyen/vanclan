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
        <Route component={Dessert} path='/dessert' />
        <Route component={Dinner} path='/' exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
