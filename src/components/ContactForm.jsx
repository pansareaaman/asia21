import React, { useEffect, useState } from 'react';
import '../style/signup.css';
import whatsapp from "../assets/icons8-whatsapp-480.png"
import { Link } from 'react-router-dom';

const ContactForm = () => {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // Add validation logic here before submitting the form
  //   const response = await fetch('http://localhost:8080/demo', {
  //     method: 'POST',
  //     body: JSON.stringify(form),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  // const getUsers = async () => {
  //   const response = await fetch('http://localhost:8080/demo', {
  //     method: 'GET'
  //   });
  //   const data = await response.json();
  //   setUsers(data);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div>
      <div className="wrapper" style={{backgroundImage:"none"}}>
        <form className="form_main" action="https://getform.io/f/paygjqda" method="POST"> 
          <p className="heading">Contact Us</p>

          <a href="https://wa.me/+9373242349">
          <div className="inputContainer" style={{ width:"100%",backgroundColor:"#F9FAFB",border:'1px solid',paddingInline:'10px', padding:'5px',borderRadius:"10px" ,boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;", marginRight:'30px',marginBottom:'5px'}}>
           <img src={whatsapp} alt="" height={"30px"}/>
           <h5 style={{color:"black"}}>Contact Via Whatsapp</h5>
          </div>
          </a>

          OR
          
          <div className="inputContainer">
            <input
              placeholder="First Name"
              name="firstName"
              id="firstName"
              className="inputField"
              type="text"
              value={form.firstName}
              onChange={handleForm}
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <button type="submit" id="button">Submit</button>
          <div className="signupContainer">
            {/* <p>Already have an account?</p> */}
            <Link to="/login" className="login">Login</Link>
          </div>
        </form>

        {/* Display users */}
        {/* <div>
          <ul>
            {users.map(user => (
              <li key={user._id}>
                {user.firstName} {user.lastName}, {user.age}, {user.email}, {user.phoneNumber}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};



export default ContactForm
