import React from "react";
import Menu from "./components/Menu";
import Registration from "./components/registration";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/footer";
import Genres from "./components/Genres";
import Customers from "./components/customers";
import Movies from "./components/movies";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/genres" component={Genres} />
          <Route path="/customers" component={Customers} />
          <Route path="/movies" component={Movies} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
