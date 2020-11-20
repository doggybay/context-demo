import React, { createContext, useState } from 'react';

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [state, setState] = useState({
    users: [
      {
        fname: "john",
        lname: "smith",
        email: "john.smith@mail.com",
        password: "howdy",
        id: 1,
      },
      {
        fname: "jane",
        lname: "smith",
        email: "jane.smith@mail.com",
        password: "howdy",
        id: 2,
      },
      {
        fname: "james",
        lname: "smith",
        email: "james.smith@mail.com",
        password: "howdy",
        id: 3,
      },
    ],
    dense: false,
    secondary: false,
    
  });
  
  const handleToggle = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleChange = (name, value) => {
    setState({ ...state, user: {[name]: value} })
  }

  let count = 4

  const handleSubmit = (e, formState) => {
    console.log('inside submit: ', formState)
    let newUser = {...formState, id: count}
    e.preventDefault()
    setState({ ...state, users: [...state.users, newUser] })
    count++
  }

  return ( 
    <UsersContext.Provider value={{state, handleToggle, handleChange, handleSubmit}}>
      {props.children}
    </UsersContext.Provider>
  );
}

export default UsersContextProvider;