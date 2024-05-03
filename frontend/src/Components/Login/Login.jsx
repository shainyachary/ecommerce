import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const signin = async () => {
    console.log("clicked", formData);
    let responseData;
    await fetch(
      "https://vercel.com/shainy-acharys-projects/ecommerce-server/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };
  const signup = async () => {
    console.log("signup", formData);
    let responseData;
    await fetch(
      "https://vercel.com/shainy-acharys-projects/ecommerce-server/signup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error);
    }
  };

  return (
    <section className="login_container">
      <div className="login_wrapper">
        {state === "Login" ? (
          <div className="form_title">Login</div>
        ) : (
          <div className="form_title">Sign Up</div>
        )}
        <div className="form">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              type="name"
              id="username"
              onChange={changeHandler}
              placeholder="Email Address"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formData.email}
            type="email"
            id="email"
            onChange={changeHandler}
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            type="password"
            id="password"
            onChange={changeHandler}
            placeholder="Password"
          />
          <button
            className="form_login_btn"
            onClick={() => {
              state === "Login" ? signin() : signup();
            }}
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
        </div>
      </div>
    </section>
  );
};

export default Login;
