import React from 'react';
import UserForm from './components/forms/UserForm';
import Users from './components/users/Users';
import './App.css';
import Grid from '@material-ui/core/Grid';
import UsersContextProvider from './contexts/UsersContext';
import UserFormContextProvider from './contexts/UserFormContext';

function App() {
  return (
    <div className="App">
      
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <UserFormContextProvider>
              <UserForm />
            </UserFormContextProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <Users />
          </Grid>
        </Grid>
      
    </div>
  );
}

export default App;
