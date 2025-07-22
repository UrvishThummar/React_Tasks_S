import React, { useRef } from 'react';

export const FormValidation = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const errorRef = useRef(null);
    const successRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        errorRef.current.innerText = '';
        successRef.current.innerText = '';

        if (!name || !email || !pass) {
            errorRef.current.innerText = 'Please fill in all fields.';
            return;
        }

        const emailPattern = /^\S+@\S+\.\S+$/;
        if (!emailPattern.test(email)) {
            errorRef.current.innerText = 'Please enter a valid email address.';
            return;
        }

        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passPattern.test(pass)) {
            errorRef.current.innerText =
                'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.';
            return;
        }

        successRef.current.innerText = 'Form submitted successfully!';

        nameRef.current.value = "";
        emailRef.current.value = "";
        passRef.current.value = "";


    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" ref={nameRef} placeholder="Enter name" /><br /><br />
                <input type="email" name="email" ref={emailRef} placeholder="Enter email" /><br /><br />
                <input type="password" name="password" ref={passRef} placeholder="Enter password" /><br /><br />
                <button type="submit">Submit</button>
            </form>
            <p ref={errorRef} style={{ color: 'red' }}></p>
            <p ref={successRef} style={{ color: 'green' }}></p>
        </div>
    );
};
