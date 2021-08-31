import React from 'react';
import './SignIn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default () => {
  return (
    <section className="signin-section">
      <div className="sigin-form">
        <form>
          <div>
            <h4>
              Welcome to <span className="zero-orange">3ZERO Club!</span>
            </h4>
          </div>
          <div>
            <input type="text" placeholder="User ID / E-mail Address" />
          </div>
          <div className="password-box">
            <input type="password" placeholder="Password" />
            <p>
              <FontAwesomeIcon icon={faEye} />
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center conditional-btn">
            <button>Sign in</button>
            <p>
              Not registered? <a href="/">Register Now!</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
