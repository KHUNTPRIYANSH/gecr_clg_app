import React from "react";
import "./Form.css";
const Form = () => {
  const path = "./../imgs/";
  return (
    <>
      <div className="container">
        <form action="#">
          <h1>Create New Account</h1>
          <div className="row">
            <h2>Full Name</h2>
            <div className="field">
              <input type="text" placeholder="Enter Your Full Name " />
              <i className="fa fa-user" />
            </div>
          </div>
          <div className="row">
            <h2>Email</h2>
            <div className="field">
              <input type="text" placeholder="Enter Your Email" />
              <i className="fa fa-envelope-o" aria-hidden="true" />
            </div>
          </div>
          <div className="row">
            <h2>Password</h2>
            <div className="field">
              <input type="text" placeholder="Enter Your Password" />
              <i className="fa fa-eye" aria-hidden="true" />
            </div>
          </div>
          <div className="row">
            <h2>Confirm Password</h2>
            <div className="field">
              <input type="text" placeholder="Enter Your Password Again" />
              <i className="fa fa-eye" aria-hidden="true" />
            </div>
          </div>
          <div className="info">
            <input type="checkbox" name id defaultChecked />
            <p>
              I Agree With <span className="blue">Terms Of Services</span> and
              <span className="blue"> Privacy Policy. </span>
            </p>
          </div>
          <div className="row">
            <div className="btn">Sign Up</div>
          </div>
          <div className="info">Or SignIn With</div>
          <div className="social">
            <div className="btn-g">
              <img
                src={`https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png`}
                alt=""
              />
              <div className="btn-txt"></div>
              SignIn With Google
            </div>
          </div>
          {/* <div className="info mgn">
          Already Have An Account? <span className="blue">Login</span>
        </div> */}
        </form>
      </div>
    </>
  );
};

export default Form;
