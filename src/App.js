import Home from "./pages/Home";
import Search from './pages/Search'
import {Route, Switch} from 'react-router-dom';
import { useEffect } from "react";
import { connect } from "react-redux";
import { firstRequest } from "./store/actions";

function App({dispatch}) {
  useEffect(()=> {
    dispatch(firstRequest())
  })

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
}

export default connect()(App);
