import React, { useState } from 'react';
import '../Register/register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData); // replace with actual submit logic
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
