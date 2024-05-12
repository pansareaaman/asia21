import React, { useEffect, useState } from 'react';
import '../style/signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: ''
  });
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add validation logic here before submitting the form
    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log(data);
  };

  const getUsers = async () => {
    const response = await fetch('http://localhost:8080/demo', {
      method: 'GET'
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="wrapper">
        <form className="form_main" onSubmit={handleSubmit}>
          <p className="heading">Register</p>
          <div className="inputContainer">
            <input
              placeholder="First Name"
              name="firstName"
              id="firstName"
              className="inputField"
              type="text"
              value={form.firstName}
              onChange={handleForm}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              className="inputField"
              type="text"
              value={form.lastName}
              onChange={handleForm}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Age"
              name="age"
              id="age"
              className="inputField"
              type="text"
              value={form.age}
              onChange={handleForm}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Email"
              name="email"
              id="email"
              className="inputField"
              type="email"
              value={form.email}
              onChange={handleForm}
            />
          </div>
          <div className="inputContainer">
            <input
              placeholder="Phone Number"
              name="phoneNumber"
              id="phoneNumber"
              className="inputField"
              type="text"
              value={form.phoneNumber}
              onChange={handleForm}
            />
          </div>
          <button type="submit" id="button">Submit</button>
          <div className="signupContainer">
            {/* <p>Already have an account?</p> */}
            <Link to="/login" className="login">Login</Link>
          </div>
        </form>

        {/* Display users */}
        <div>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                {user.firstName} {user.lastName}, {user.age}, {user.email}, {user.phoneNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
