import React from "react";

const Form = props => {
  return (
    <>
      <form onSubmit={props.submitForm}>
        <h3>Add Member</h3>
        <label htmlFor="fName"> Name: </label>
        <input
          onChange={props.onInputChange}
          id="fName"
          name="fname"
          type="text"
          value={props.formData.fname}
        />
        
        <label htmlFor="emailInput">Email: </label>
        <input
          onChange={props.onInputChange}
          id="emailInput"
          name="email"
          type="text"
          value={props.formData.email}
        />
        
        <label htmlFor="roleInput">Role: </label>
        <input
          onChange={props.onInputChange}
          id="roleInput"
          name="role"
          type="text"
          value={props.formData.role}
        />
        <button>Edit</button>
      </form>
    </>
  );
};

export default Form;