import { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

import * as EmailValidator from 'email-validator';

const Email = ({ value, postCallback, children }) => {
  console.log(children);

  let [edit, setEdit] = useState(false);
  let [e, setE] = useState(false);
  let [msg, setMsg] = useState('');
  let [email, setEmail] = useState(value);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const postEmail = () => {
    if (email.length < 1) {
      setE(true);
      setMsg('Please Input Value');
    } else if (!EmailValidator.validate(email)) {
      setE(true);
      setMsg('Please Input Valid Email');
    } else {
      setE(false);
      setMsg('');
      setEdit(false);
      postCallback(email);
    }
  };
  useEffect(() => {
    setEmail(value);
  }, [value]);

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
            {children[0]}
            <ListItemSecondaryAction>{children[1]}</ListItemSecondaryAction>
          </ListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default Email;
