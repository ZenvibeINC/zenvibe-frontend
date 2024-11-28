import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from './shared-theme/AppTheme';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import ColorModeSelect from './shared-theme/ColorModeSelect';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from "../../Redux/actions";
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));
const SignUpContainer = styled(Stack)(({ theme }) => ({
    height: 'calc(100% - var(--template-frame-height, 0))',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));
export default function SignUp(props) {
    const [loginData, setLoginData] = useState({
        name: "",
        email: "",
        password: "",
        phone: 0,
        allowExtraEmails: false,
    });
    //   const [emailError, setEmailError] = useState(false);
    //   const [emailErrorMessage, setEmailErrorMessage] = useState('');
    //   const [passwordError, setPasswordError] = useState(false);
    //   const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    //   const [nameError, setNameError] = useState(false);
    //   const [nameErrorMessage, setNameErrorMessage] = useState('');
    //   const [phoneError, setPhoneError] = useState(false);
    //   const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheckboxChange = (e) => {
        setLoginData({
            ...loginData,
            allowExtraEmails: Boolean(e.target.checked),
        });
    };
    //   const validateInputs = () => {
    //     const { email, password, name, phone } = loginData;
    //     let isValid = true;
    //     if (!email || !/\S+@\S+\.\S+/.test(email)) {
    //       setEmailError(true);
    //       setEmailErrorMessage('Please enter a valid email address.');
    //       isValid = false;
    //     } else {
    //       setEmailError(false);
    //       setEmailErrorMessage('');
    //     }
    //     if (!password || password.length < 6) {
    //       setPasswordError(true);
    //       setPasswordErrorMessage('Password must be at least 6 characters long.');
    //       isValid = false;
    //     } else {
    //       setPasswordError(false);
    //       setPasswordErrorMessage('');
    //     }
    //     if (!name || name.length < 1) {
    //       setNameError(true);
    //       setNameErrorMessage('Name is required.');
    //       isValid = false;
    //     } else {
    //       setNameError(false);
    //       setNameErrorMessage('');
    //     }
    //     if (!phone || !/^\d{7,15}$/.test(phone.toString())) {
    //         setPhoneError(true);
    //         setPhoneErrorMessage('Please enter a valid phone number.');
    //         isValid = false;
    //       } else {
    //         setPhoneError(false);
    //         setPhoneErrorMessage('');
    //       }
    //     return isValid;
    //   };
    const handleSubmit = (event) => {
        event.preventDefault();
        // if (validateInputs()) {
        console.log('Datos a enviar:', loginData); // Esto te permitirá ver los datos antes de enviarlos
        dispatch(register(loginData)); // Despacha la acción de registro
        navigate('/'); // Navega a la página de inicio
        // }
    };
    return (_jsxs(AppTheme, { ...props, children: [_jsx(CssBaseline, { enableColorScheme: true }), _jsx(ColorModeSelect, { sx: { position: 'fixed', top: '1rem', right: '1rem' } }), _jsx(SignUpContainer, { direction: "column", justifyContent: "space-between", children: _jsxs(Card, { variant: "outlined", children: [_jsx(SitemarkIcon, {}), _jsx(Typography, { component: "h1", variant: "h4", sx: { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }, children: "Sign up" }), _jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "name", children: "Full name" }), _jsx(TextField, { autoComplete: "name", name: "name", onChange: handleChange, value: loginData.name, required: true, fullWidth: true, id: "name", placeholder: "Jon Snow" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "email", children: "Email" }), _jsx(TextField, { required: true, fullWidth: true, id: "email", placeholder: "your@email.com", name: "email", value: loginData.email, onChange: handleChange, autoComplete: "email", variant: "outlined" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "password", children: "Password" }), _jsx(TextField, { required: true, fullWidth: true, name: "password", value: loginData.password, onChange: handleChange, placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", type: "password", id: "password", autoComplete: "new-password", variant: "outlined" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: "phone", children: "Phone" }), _jsx(TextField, { required: true, fullWidth: true, name: "phone", value: loginData.phone, onChange: handleChange, placeholder: "123456789", type: "number", id: "phone" })] }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: loginData.allowExtraEmails, onChange: handleCheckboxChange, color: "primary" }), label: "I want to receive updates via email." }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", children: "Sign up" }), _jsxs(Typography, { sx: { textAlign: 'center' }, children: ["Already have an account?", ' ', _jsx("span", { children: _jsx(Link, { href: "/material-ui/getting-started/templates/sign-in/", variant: "body2", sx: { alignSelf: 'center' }, children: "Sign in" }) })] })] }), _jsx(Divider, { children: _jsx(Typography, { sx: { color: 'text.secondary' }, children: "or" }) }), _jsxs(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 }, children: [_jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign up with Google'), startIcon: _jsx(GoogleIcon, {}), children: "Sign up with Google" }), _jsx(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign up with Facebook'), startIcon: _jsx(FacebookIcon, {}), children: "Sign up with Facebook" })] })] }) })] }));
}
//# sourceMappingURL=SignUp.js.map