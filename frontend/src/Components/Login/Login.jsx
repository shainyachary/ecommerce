import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const login = () => {
    console.log("login");
  };
  const signup = () => {
    console.log("signup");
  };

  return (
    <section className="login_container">
      <div className="login_wrapper">
        <div className="form_title">Login</div>
        <form action="" method="post">
          {state === "Sign Up" ? (
            <input type="name" id="username" placeholder="Email Address" />
          ) : (
            ""
          )}
          <input type="email" id="email" placeholder="Email Address" />
          <input type="password" id="password" placeholder="Password" />
          <button
            className="form_login_btn"
            onClick={() => (state === "Login" ? login() : signup())}
          >
            Continue
          </button>
          {state === "Sign Up" ? (
            <p className="form_condition">
              Dont have an account?
              <span className="btn_form" onClick={() => setState("Login")}>
                Login
              </span>
            </p>
          ) : (
            <p className="form_condition">
              Create an account?
              <span className="btn_form" onClick={() => setState("Sign Up")}>
                Click Here
              </span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Login;
