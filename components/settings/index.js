import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

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
  const [editEmail, setEditEmail] = useState(false);
  const [editGiven, setEditGiven] = useState(false);
  const [editSurname, setEditSurname] = useState(false);

  const postEmail = () => {
    console.log('custom message');
    //api call here
    setEditEmail(false);
  };

  const postGivenName = () => {
    console.log('custom message 2');
    //api call here
    setEditGiven(false);
  };

  const postSurname = () => {
    console.log('custom message 3');
    //api call here
    setEditSurname(false);
  };

  return (
    <>
      {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
      {/* <Divider /> */}
      <List>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <ListItem>
              <ListItemText>Email </ListItemText>
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
                disabled={!editEmail}
              />
              <ListItemSecondaryAction>
                {!editEmail ? (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => setEditEmail(true)}
                  >
                    <EditIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    edge='end'
                    aria-label='edit'
                    onClick={() => postEmail()}
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
              <ListItemText>Given Name </ListItemText>
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
                disabled={!editGiven}
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
