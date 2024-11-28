import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: Styles.container, children: _jsxs("form", { onSubmit: handleSubmit, className: Styles.form, children: [_jsx("h1", { className: Styles.title, children: "Register" }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", name: "name", onChange: handleChange, value: loginData.name, id: "name", required: true, placeholder: "name" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "email", name: "email", onChange: handleChange, value: loginData.email, id: "email", required: true, placeholder: "nombre@example.com" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { type: "password", name: "password", onChange: handleChange, value: loginData.password, id: "password", required: true, placeholder: "***********" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { htmlFor: "phone", children: "Phone" }), _jsx("input", { type: "number", name: "phone", onChange: handleChange, value: loginData.phone, id: "phone", required: true, placeholder: "123456789" })] }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: loginData.allowExtraEmails, onChange: handleCheckboxChange, color: "primary" }), label: "I want to receive updates via email." }), _jsx("button", { type: "submit", className: Styles.button, children: "Register" })] }) }));
}
//# sourceMappingURL=LoginForm.js.map