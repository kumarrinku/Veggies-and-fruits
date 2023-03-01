import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/summary" component={Summary} />
      </Switch>
    </>
  );
}

export default App;
