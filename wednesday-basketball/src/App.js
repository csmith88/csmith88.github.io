import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
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
                        <form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style={{ display : 'block' }}>
                          <div class="form-group">
                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Email cím" value="" />
                          </div>
                          <div class="form-group">
                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Jelszó" />
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-6 col-sm-offset-3">
                                <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Belépés" />
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="text-center">
                                  <a href="https://phpoll.com/recover" tabindex="5" class="forgot-password">Elfelejtetted jelszavad?</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style={{ display : 'none' }}>
                          <div class="form-group">
                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Becenév" value="" />
                          </div>
                          <div class="form-group">
                            <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email cím" value="" />
                          </div>
                          <div class="form-group">
                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Jelszó" />
                          </div>
                          <div class="form-group">
                            <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Jelszó megerősítése" />
                          </div>
                          <div class="form-group">
                            <div class="row">
                              <div class="col-sm-6 col-sm-offset-3">
                                <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Regisztrálok" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-5 mb-3 text-muted">© 2019</p>
        </header>
      </div>
    );
  }
}

export default App;
