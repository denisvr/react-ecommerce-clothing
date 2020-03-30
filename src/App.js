import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })

  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
