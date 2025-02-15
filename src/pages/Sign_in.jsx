import React from "react";
import "../styles/sign_in.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form className="signup-form">
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default SignIn;
