import React from "react";
import Home from "./pages/Home";
import Reakt from "./pages/Reakt";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";



const App =()=> {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/react">
              <Reakt />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
