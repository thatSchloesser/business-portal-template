import { useState } from 'react';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import * as EmailValidator from 'email-validator';

const EmailInput = ({ postCallback, discardChanges }) => {
  let [e, setE] = useState(false);
  let [msg, setMsg] = useState('');
  let [email, setEmail] = useState('');

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
      postCallback(email);
      setEmail('');
    }
  };

  return (
    <>
      <TextField
        fullWidth
        label='New Email'
        onChange={updateEmail}
        error={e}
        helperText={msg}
      />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='save' onClick={() => postEmail()}>
          <SaveIcon />
        </IconButton>
        <IconButton edge='end' aria-label='save' onClick={discardChanges}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

export default EmailInput;
