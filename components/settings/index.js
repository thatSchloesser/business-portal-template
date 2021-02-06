import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import EmailInput from './EmailInput';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import * as EmailValidator from 'email-validator';

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

//TODO

/*
1. make input toggle
2. load user
3. UPDARTE user

*/

const Settings = () => {
  let [editEmail, setEditEmail] = useState(false);
  let [emailError, setEmailError] = useState(false);

  let [editGiven, setEditGiven] = useState(false);
  let [editSurname, setEditSurname] = useState(false);

  let userData = {
    email: 'test@test.com',
    firstName: 'bob',
    lastName: 'Yolo',
  };

  let [user, setUser] = useState(userData);

  const postEmail = () => {
    console.log('custom message');
    //api call here
    console.log(EmailValidator.validate('test@email.com'));
    setEditEmail(false);
  };

  const postGivenName = () => {
    console.log('custom message 2');
    //api call here
    console.log(name);
    setEditGiven(false);
  };

  const postSurname = () => {
    console.log('custom message 3');
    //api call here
    setEditSurname(false);
  };

  const updateUser = (e) => {
    console.log(user, userData);
    console.log(e.target.value);
    // setUser({ firstName: e.target.value });
    userData.firstName = e.target.value;
  };

  let name = 'temp';

  return (
    <>
      {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
      {/* <Divider /> */}
      <List>
        <EmailInput user={userData} />
        <Divider />
        <Grid container>
          <Grid item sm={3} xs={12}>
            <ListItem>
              <ListItemText>Given Name </ListItemText>
            </ListItem>
          </Grid>
          <Grid item sm={9} xs={12}>
            {/* kind of strange that a graph lets us stick this inline, but hey why not */}
            {/* <ListItem pt={0} style={{ 'padding-top': '0' }}> */}
            <ListItem>
              {/* !!!!!!!!!!!!!!!!!!!! */}
              <TextField
                id='standard-textarea'
                label={user.firstName}
                placeholder={user.firstName}
                multiline
                fullWidth
                disabled={!editGiven}
                onChange={updateUser}
              />
              <ListItemSecondaryAction>
                {!editGiven ? (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => setEditGiven(true)}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => postGivenName()}
                  >
                    <SaveIcon />
                  </IconButton>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item sm={3} xs={12}>
            <ListItem>
              <ListItemText>Surname </ListItemText>
            </ListItem>
          </Grid>
          <Grid item sm={9} xs={12}>
            {/* kind of strange that a graph lets us stick this inline, but hey why not */}
            {/* <ListItem pt={0} style={{ 'padding-top': '0' }}> */}
            <ListItem>
              <TextField
                id='standard-textarea'
                label='Placeholder'
                placeholder='placeholder'
                multiline
                fullWidth
                disabled={!editSurname}
                error={true}
                helperText={'some helper'}
              />
              <ListItemSecondaryAction>
                {!editSurname ? (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => setEditSurname(true)}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => postSurname()}
                  >
                    <SaveIcon />
                  </IconButton>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          </Grid>
        </Grid>
      </List>
    </>
  );
};

export default Settings;
