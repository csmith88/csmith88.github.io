import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import FirebaseContext from './utils/firebase/FirebaseContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="col-md-6">
          <div class="panel panel-login">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-6">
                  <a href="#" class="active" id="login-form-link">Belépés</a>
                </div>
                <div class="col-xs-6">
                  <a href="#" id="register-form-link">Regisztráció</a>
                </div>
              </div>
              <hr />
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-12">
                <FirebaseContext.Consumer>
                  {firebase=>{return <div>Firebase</div>}}
                  <Login />
                  <Register />
                </FirebaseContext.Consumer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-5 mb-3 text-muted">© 2019</p>
      </div>
    );
  }
}

export default App;
