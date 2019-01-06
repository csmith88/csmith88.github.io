import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Belépés</h1>
            <label for="inputEmail" class="sr-only">Email cím</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email cím" required="" autofocus=""/>
            <label for="inputPassword" class="sr-only">Jelszó</label>
            <input type="password" id="inputPassword" class="form-control mb-3" placeholder="Jelszó" required=""/>
            <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">Belépés</button>
          </form>
          <button class="btn btn-lg" type="submit" id="register">Regisztráció</button>
          <p class="mt-5 mb-3 text-muted">© 2019</p>
        </header>
      </div>
    );
  }
}

export default App;
