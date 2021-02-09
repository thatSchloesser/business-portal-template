//I need to setup my user object to just be of type "value" and
//then have the post get passed as prop
import { useState } from 'react';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const Input = ({ postCallback, discardChanges }) => {
  let [e, setE] = useState(false);
  let [msg, setMsg] = useState('');
  let [val, setVal] = useState('');

  const updateInput = (e) => {
    setVal(e.target.value);
  };

  const postInput = () => {
    if (val.length < 1) {
      setE(true);
      setMsg('Please Input Value');
    } else {
      //api call here
      setE(false);
      setMsg('');
      postCallback(val);
      setVal('');
    }
  };

  return (
    <>
      {/* kind of strange that a graph lets us stick this inline, but hey why not */}
      {/* <ListItem pt={0} style={{ 'padding-top': '0' }}> */}

      <TextField fullWidth onChange={updateInput} error={e} helperText={msg} />
      <ListItemSecondaryAction>
        <IconButton edge='end' aria-label='save' onClick={() => postInput()}>
          <SaveIcon />
        </IconButton>
        <IconButton edge='end' aria-label='save' onClick={discardChanges}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

export default Input;
