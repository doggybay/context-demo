import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { UsersContext } from "../../contexts/UsersContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


const Users = () => {
  const classes = useStyles();
  const { state, handleToggle } = useContext(UsersContext);

  let listOfUsers = state.users.map((user) => (
    <ListItem key={user.id}>
      <ListItemText
        primary={`${user.fname} ${user.lname}`}
        secondary={state.secondary ? `${user.email}` : null}
      />
    </ListItem>
  ));

  return (
    <div className={classes.root}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.dense}
              onChange={(e) => handleToggle("dense", e.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.secondary}
              onChange={(e) => handleToggle("secondary", e.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Users
          </Typography>
          <div className={classes.demo}>
            <List dense={state.dense}>
              {listOfUsers}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Users;