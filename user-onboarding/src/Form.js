import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';

// const formSchema = yup.object().shape().

//     name: "",
//     email: "",
//     password: "",
    

function Form() {
    const [formState, setformState] = useState[{
        name: '',
        email: '',
        password: '',
        terms: '',
    }];

    return (
        <Form onSubmit={formSubmit}>
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
        </Form>
    )
}

export default Form;