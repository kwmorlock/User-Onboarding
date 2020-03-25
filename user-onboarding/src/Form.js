import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';

const formSchema = yup.object().shape({

    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4, "Too short, make longer!").required("PLZ ADD"),
    //password min makes it so the password has to be atleast 4 characters long
    terms: yup.boolean().oneOf([true], "Please sign your soul over to me")
    //boolean and not string because it has to be true or false
})

function Form() {
    const [formState, setFormState] = useState({
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

    const [buttondisabled, setButtondisabled] = useState(true);

    const [response, setResponse] = useState([]);

//validating useEffect
useEffect(() => {
    formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
      });
    }, [formState]);

//validating change

const validateChange = event => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(valid => {
        setErrors({
          ...errors,
          [event.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors
        });
      });
  };

  //preventDefault will prevent page from refreshing
  const formSubmit = event => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setResponse(res.data);
        console.log("Meow", response);

        //after we receive data we want to clear boxes

        setFormState({
          name: "",
          email: "",
          password: "",
          terms: false,
        });
      })
      .catch(err => {
        console.log(err.res);
      });
  };

  const inputChange = event => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value
    };
    validateChange(event);
    setFormState(newFormData);
  };



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