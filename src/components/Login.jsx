import React from 'react';

export default function Login(){

  return(
    <form>
    <div className="form-group">
      <label for="inputEmail">Email</label>
      <input
        className="form-control"
        id="inputEmail"
        placeholder="galeriau@gmail.com"
      />
    </div>
    <div className="form-group">
      <label htmlfor="inputPassword">Password</label>

      <input className="form-control" id="inputPassword" type="password" />
    </div>

    <div className="modalBody__rememberMe form-group">
      <div className="row">
        <div className="modalBody__rememberMe-checkbox col-4">
          <label className="customcheck ">
            Remember me
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>

        <div className="modalBody__rememberMe-forgotPassword col-8">
          <Link to="/">
            <label className="forgotPassword cursor__pointer">
              Forgot Password?
            </label>
          </Link>
        </div>
      </div>
    </div>
    <Button className='form-group btn btn-primary btn-block btn-shadow' id="signIn-button" type="submit">Sign in</Button>
    {/* <Button className='form-group btn btn-primary btn-block btn-shadow' type="submit" onClick={props.onHide}>Sign in</Button> */}

    </form>
  )
}