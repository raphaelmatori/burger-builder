import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import assyncComponent from './hoc/asyncComponent/asyncComponent';

import './App.module.scss';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

const assyncCheckout = assyncComponent(() => {
  return import('./containers/Checkout/Checkout')
});
const assyncOrders = assyncComponent(() => {
  return import('./containers/Orders/Orders')
});
const assyncAuth = assyncComponent(() => {
  return import('./containers/Auth/Auth')
});

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={assyncAuth} />
        <Route path="/burger-builder" exact component={BurgerBuilder} />
        <Redirect to="/burger-builder" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={assyncCheckout} />
          <Route path="/orders" component={assyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={assyncAuth} />
          <Route path="/burger-builder" exact component={BurgerBuilder} />
          <Redirect to="/burger-builder" />
        </Switch>
      )
    }
    return (
      <BrowserRouter>
        <div>
          <Layout>
            {routes}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
