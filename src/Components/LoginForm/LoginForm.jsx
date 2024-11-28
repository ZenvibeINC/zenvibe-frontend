import Styles from "./LoginForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "..//..//Redux/actions.ts";
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LoginForm() {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    allowExtraEmails: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos a enviar:', loginData);
    dispatch(register(loginData)); // Despacha la acción de registro
    navigate("/"); // Navega a la página de inicio
  };

  const handleCheckboxChange = (e) => {
    setLoginData({
        ...loginData,
        allowExtraEmails: Boolean(e.target.checked),
    });
};

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit} className={Styles.form}>
        <h1 className={Styles.title}>Register</h1>
        <div className={Styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={loginData.name}
            id="name"
            required
            placeholder="name"
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={loginData.email}
            id="email"
            required
            placeholder="nombre@example.com"
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={loginData.password}
            id="password"
            required
            placeholder="***********"
          />
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={loginData.phone}
            id="phone"
            required
            placeholder="123456789"
          />
        </div>
        <FormControlLabel
                control={
                    <Checkbox 
                        checked={loginData.allowExtraEmails} 
                        onChange={handleCheckboxChange} 
                        color="primary" 
                    />
                }
                label="I want to receive updates via email."
            />
        <button type="submit" className={Styles.button}>Register</button>
      </form>
    </div>
  );
}
