import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Styles from './ProductForm.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct } from '..//..//Redux/actions.ts';
export default function ProductForm() {
    const [productFormData, setProductFormData] = useState({
        name: "",
        description: "",
        price: "",
        inventory: "",
        category_id: ""
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setProductFormData({
            ...productFormData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productFormData));
        navigate('/home');
    };
    return (_jsx("div", { className: Styles.container, children: _jsxs("form", { onSubmit: handleSubmit, className: Styles.form, children: [_jsx("h1", { className: Styles.title, children: "New Product" }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", name: "name", onChange: handleChange, value: productFormData.name, id: "name", required: true, placeholder: "Product Name" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { children: "Description" }), _jsx("input", { type: "text", name: "description", onChange: handleChange, value: productFormData.description, id: "description", required: true, placeholder: "A product description" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { children: "Price" }), _jsx("input", { type: "number", name: "price", onChange: handleChange, value: productFormData.price, id: "price", required: true, placeholder: "24.99" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { children: "Inventory" }), _jsx("input", { type: "number", name: "inventory", onChange: handleChange, value: productFormData.inventory, id: "inventory", required: true, placeholder: "1" })] }), _jsxs("div", { className: Styles.inputContainer, children: [_jsx("label", { children: "Category Id" }), _jsx("input", { type: "number", name: "category_id", onChange: handleChange, value: productFormData.category_id, id: "category_id", required: true, placeholder: "4" })] }), _jsx("button", { type: "submit", className: Styles.button, children: "Add Product" })] }) }));
}
//# sourceMappingURL=ProductForm.js.map