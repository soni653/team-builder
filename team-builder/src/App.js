import React, { useState } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    role: ""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    console.log(formData);
  };
  const [teamList] = useState([]);

  const submitForm = event => {
    teamList.push(formData);
    setFormData({
      fname: "",
      email: "",
      role: ""
    });

    event.preventDefault();

    console.log(teamList);
    console.log(formData);
  };
  return (
    <div className="App">
      <header className="App-header">
      <Form
      onInputChange={onInputChange}
      formData={formData}
      submitForm={submitForm}
    />

      </header>
        <h3>Team List</h3>
        <div className="card-wrapper">
          {teamList.map(a => {
            return (
              <UserCard
                fname={a.fname}
                email={a.email}
                role={a.role}
              />
            );
          })}
        </div>
        </div>
  );
}

export default App;
