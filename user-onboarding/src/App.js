import React, { useState, useEffect } from 'react';
import User from './User';
import formSchema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import styled from 'styled-components';

const StyledApp = styled.div`
  color: #4b3621;
  border: 3px dashed #4b3621;
  margin: 70px;
`

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: '',
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}
const initialFriends = [];
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     console.log('res: ', res);
  //     setUsers(res.data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     debugger;
  //   });

  // }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log('result of posting new user', res.status);
      setUsers([...users, res.data]);
    })
    .catch(err => {
      console.log(err);
      debugger;
    });
    setFormValues(initialFormValues);
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})

      });
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
  }
    postNewUser(newUser);
  }

  // useEffect(() => {
  //   getUsers()
  //   console.log('inEffect users:', users);
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <StyledApp className="App">
      <Form 
        values={formValues}
        submit={formSubmit}
        change={inputChange}
        disabled={disabled}
        errors={formErrors}
      />

      {  
        users.map(user => {
          return (
            <User key={user.email} details={user} />
          )
        })
      }
    </StyledApp>
  );
}

export default App;
