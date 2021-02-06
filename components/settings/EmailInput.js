import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import * as EmailValidator from 'email-validator';

const Email = ({ user }) => {
  console.log(user);

  let [edit, setEdit] = useState(false);
  let [e, setE] = useState(false);
  let [msg, setMsg] = useState('');

  const updateEmail = (e) => {
    console.log(e.target.value);
    // setUser({ firstName: e.target.value });
    console.log(user);
    user.email = e.target.value;
    console.log(user);
  };

  const postEmail = () => {
    if (user.email.length < 1) {
      setE(true);
      setMsg('Please Input Value');
    } else if (!EmailValidator.validate(user.email)) {
      setE(true);
      setMsg('Please Input Valid Email');
    } else {
      //api call here
      setE(false);
      setMsg('');
      setEdit(false);
    }
  };

  return (
    <>
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
              fullWidth
              defaultValue={user.email}
              disabled={!edit}
              onChange={updateEmail}
              error={e}
              helperText={msg}
            />
            <ListItemSecondaryAction>
              {!edit ? (
                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => setEdit(true)}
                >
                  <EditIcon />
                </IconButton>
              ) : (
                <IconButton
                  edge='end'
                  aria-label='save'
                  onClick={() => postEmail()}
                >
                  <SaveIcon />
                </IconButton>
              )}
            </ListItemSecondaryAction>
          </ListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default Email;
