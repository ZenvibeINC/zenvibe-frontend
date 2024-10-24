import Styles from './ProductForm.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProduct } from '..//..//Redux/actions.ts';


export default function  ProductForm () {
    const[productFormData, setProductFormData] = useState({
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

    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(createProduct(productFormData));
        navigate('/home');
    };

    return (
        <div className={Styles.container}>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <h1 className={Styles.title}>New Product</h1>
                <div className={Styles.inputContainer}>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={productFormData.name}
                    id="name"
                    required
                    placeholder="Product Name"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label>Description</label>
                    <input
                     type="text"
                     name="description"
                     onChange={handleChange}
                     value={productFormData.description}
                     id="description"
                     required
                     placeholder="A product description"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label>Price</label>
                    <input
                     type="number"
                     name="price"
                     onChange={handleChange}
                     value={productFormData.price}
                     id="price"
                     required
                     placeholder="24.99"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label>Inventory</label>
                    <input
                     type="number"
                     name="inventory"
                     onChange={handleChange}
                     value={productFormData.inventory}
                     id="inventory"
                     required
                     placeholder="1"
                    />
                </div>
                <div className={Styles.inputContainer}>
                    <label>Category Id</label>
                    <input
                     type="number"
                     name="category_id"
                     onChange={handleChange}
                     value={productFormData.category_id}
                     id="category_id"
                     required
                     placeholder="4"
                    />
                </div>
                <button type="submit" className={Styles.button}>Add Product</button>
            </form>
        </div>
    )
}