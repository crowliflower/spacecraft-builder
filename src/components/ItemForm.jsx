import { useState } from "react";

import styles from "./ItemForm.module.css";

function ItemForm({onSubmit}) {

    const INITIAL_DATA = {
        name: "",
        quantity: "",
        purpose: "",
        agreeToTerms: false
    };

    const [data, setData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState({});

    function validateForm() {
        let newFormErrors = {};

        if (!data.name) {
            newFormErrors.name = true;
        }
        if (!data.quantity) {
            newFormErrors.quantity = true;
        }
        if (!data.purpose) {
            newFormErrors.purpose = true;
        }
        if (!data.agreeToTerms) {
            newFormErrors.agreeToTerms = true;
        }
        setErrors(newFormErrors);
        return Object.keys(newFormErrors).length === 0; //I got this from the solution and I'm honestly not quite sure what it does.
        //I think it could be returning an array of errors, but only if any are present in the array.
    }

    function handleSubmit(event) {
        event.preventDefault();
        const isValidForm = validateForm();
        if (isValidForm) {
            
            const newItem = {...data, id: `${Math.random() * 10000}`};
        
            onSubmit(newItem);
            setData(INITIAL_DATA);
            setErrors({});
        }
    }

    function handleInputChange(event) {
        const {name, value, type, checked} = event.target;

        setData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }
    

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Add item to inventory</h2>
            <div className={`${styles.element} ${errors["name"] ? styles.error : ""}`}>
                <input 
                    type="text" 
                    name="name"
                    placeholder="Name"
                    value={data.name}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className={`${styles.element} ${errors["quantity"] ? styles.error : ""}`}>
                <input 
                    type="number" 
                    name="quantity"
                    placeholder="Quantity"
                    value={data.quantity}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className={`${styles.element} ${errors["purpose"] ? styles.error : ""}`}>
                <textarea 
                    name="purpose"
                    placeholder="Purpose"
                    value={data.purpose}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className={`${styles.element} ${errors["agreeToTerms"] ? styles.error : ""}`}>
                <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={data.agreeToTerms}
                    onChange={handleInputChange}
                />
                <label htmlFor="agreeToTerms">Agree to Terms</label>
            </div>

            <button type="submit" className="styles.button">
                Submit Item
            </button>

        </form>
    )
}

export default ItemForm