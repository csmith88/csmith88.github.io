import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style={{ display: 'block' }}>
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
        );
    }
}

export default Login;