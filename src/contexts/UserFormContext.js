import React, { createContext, useState } from 'react';

export const UserFormContext = createContext();

const UserFormContextProvider = (props) => {
  const [formState, setFormState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    
    setFormState({ ...formState, [name]: value })
    
    
  }
  console.log("form context: ", formState);

return ( 
    <UserFormContext.Provider value={{formState, handleChange}}>
      {props.children}
    </UserFormContext.Provider>
  );
}
 
export default UserFormContextProvider;