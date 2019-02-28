import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style={{ display: 'none' }}>
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
        );
    }
}

export default Register;