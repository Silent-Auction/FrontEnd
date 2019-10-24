import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Register = props => {
  const [form, setForm] = React.useState({ username: "", password: "", first_name: "" });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/register", form)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/auctions");
      })
      .catch(err => {
        console.log(err.response);
        setForm({ username: "", password: "", first_name: "" });
      });
  };

  return (
    <div>
      <form onSubmit={register}>
        {/* username */}
        Username:
        <input
        required
          type="text"
          name="username"
          onChange={handleChanges}
          value={form.username}
        />

        {/* password */}
        Password:
        <input
        required
          type="password"
          name="password"
          onChange={handleChanges}
          value={form.password}
        />

        {/* First Name */}
        First Name:
        <input
        required
          type="first_name"
          name="first_name"
          onChange={handleChanges}
          value={form.first_name}
        />

        {/* Last Name */}
        Last Name:
        <input
          type="last_name"
          name="last_name"
          onChange={handleChanges}
          value={form.first_name}
        />

        {/* First Name */}
        User Role:
        <input
          type="boolean"
          name="is_seller"
          onChange={handleChanges}
          value={form.first_name}
        />

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;