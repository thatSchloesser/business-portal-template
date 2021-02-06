//I need to setup my user object to just be of type "value" and
//then have the post get passed as prop
import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

const Input = ({ label, value, postCallback }) => {
  let [edit, setEdit] = useState(false);
  let [e, setE] = useState(false);
  let [msg, setMsg] = useState('');
  let [val, setVal] = useState(value);

  const updateInput = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    console.log(val);
  };

  const postInput = () => {
    console.log(val);
    console.log(val.length);

    if (val.length < 1) {
      setE(true);
      setMsg('Please Input Value');
    } else {
      //api call here
      setE(false);
      setMsg('');
      setEdit(false);
      postCallback(val);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item sm={3} xs={12}>
          <ListItem>
            <ListItemText>{label} </ListItemText>
          </ListItem>
        </Grid>
        <Grid item sm={9} xs={12}>
          {/* kind of strange that a graph lets us stick this inline, but hey why not */}
          {/* <ListItem pt={0} style={{ 'padding-top': '0' }}> */}
          <ListItem>
            <TextField
              fullWidth
              defaultValue={val}
              disabled={!edit}
              onChange={updateInput}
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
                  onClick={() => postInput()}
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

export default Input;
