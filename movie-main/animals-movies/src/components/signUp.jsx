import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [data, setData] = useState({});
  const handelSubmit = async (event) => {
    localStorage.setItem("name", data.name);
    const resulte = await axios.post("http://localhost:3002/api/users", data);
    console.log(resulte.headers["x-auth-token"]);
    localStorage.setItem("token", resulte.headers["x-auth-token"]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handelSubmit();
      }}
    >
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          onChange={(ev) => setData({ ...data, name: ev.target.value })}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(ev) => setData({ ...data, email: ev.target.value })}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={(ev) => setData({ ...data, password: ev.target.value })}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        sign up
      </button>
    </form>
  );
};

export default SignUp;
