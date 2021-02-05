import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import { positions } from '@material-ui/system';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import EditIcon from '@material-ui/icons/Edit';

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

//TODO

/*
1. make input toggle
  float left vs right
2. load user
3. UPDARTE user


*/

const Settings = () => {
  return (
    <>
      {/* <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' /> */}
      {/* <Divider /> */}
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItem>
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
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Grid>
        </Grid>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItem>
        <Divider />
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
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete'>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Grid>
        </Grid>
      </List>
      <Divider />

      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem button>
          <ListItemText primary='Trash' />
        </ListItem>
        <ListItemLink href='#simple-list'>
          <ListItemText primary='Spam' />
        </ListItemLink>
      </List>
    </>
  );
};

export default Settings;
