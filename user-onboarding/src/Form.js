import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';

// const formSchema = yup.object().shape().

//     name: "",
//     email: "",
//     password: "",
    

function Form() {
    const [formState, setformState] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })

    const [buttondisabled, setButtondisabled] = useState(true)


    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name
                <input
                id='name'
                type='text'
                name='name'
                value={formState.name}
                onChange={inputChange}
                />
            </label>

            {errors.name.length > 0 ? <p>{errors.name}</p> : null}

            <label htmlFor='email'>
                Name
                <input
                id='email'
                type='text'
                name='email'
                value={formState.email}
                onChange={inputChange}
                />
            </label>

            {errors.email.length > 0 ? <p>{errors.email}</p> : null}

            <label htmlFor='password'>
                Name
                <input
                id='password'
                type='text'
                name='password'
                value={formState.password}
                onChange={inputChange}
                />
            </label>

            {errors.password.length > 0 ? <p>{errors.password}</p> : null}

            <label htmlFor='terms'>
                Name
                <input
                id='terms'
                type='text'
                name='terms'
                value={formState.terms}
                onChange={inputChange}
                />
            </label>

            {errors.terms.length > 0 ? <p>{errors.terms}</p> : null}

        </form>
    )
}

export default Form;