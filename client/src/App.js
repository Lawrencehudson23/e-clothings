import React, { useEffect } from "react";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import LoginReg from "./pages/LoginReg/LoginReg";
import { selectCurrentUser } from "./redux/user/user.selectors";
//NOTE: LESS CODE
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import { GlobalStyle } from "./global.styles";

const App = ({ currentUser }) => {
  const unsubscribeFromAuth = null;
  useEffect(() => {
    //   // const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   //   if (userAuth) {
    //   //     const userRef = await createUserProfileDocument(userAuth);

    //   //     userRef.onSnapshot((snapShot) => {
    //   //       setCurrentUser({
    //   //         id: snapShot.id,
    //   //         ...snapShot.data(),
    //   //       });
    //   //     });
    //   //   }

    //   //   setCurrentUser(userAuth);
    //   // });

    //   //NOTE: mimic componentWillUnMount
    return () => {
      // unsubscribeFromAuth = null;
    };
  }, [currentUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginReg />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
