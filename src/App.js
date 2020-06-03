import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
