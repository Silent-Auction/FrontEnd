import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [form, setForm] = React.useState({ username: "", password: "" });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    console.log("In Login", form);
    axiosWithAuth()
      .post("/auth/login", form)
      .then(res => {
        console.log("Token check", res);
        localStorage.setItem("token", res.data.token);
        props.push("/auctions");
      })
      .catch(err => {
        console.log("Test", err);
        setForm({ username: "", password: "" });
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        {/* username */}
        Username:
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          value={form.username}
        />

        {/* password */}
        Password:
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          value={form.password}
        />

        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;