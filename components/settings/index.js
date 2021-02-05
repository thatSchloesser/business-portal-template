import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />;
}

const Settings = () => {
  return (
    <>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItem>
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
