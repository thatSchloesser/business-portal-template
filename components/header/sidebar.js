import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotesIcon from '@material-ui/icons/Notes';

import { useAuthUser } from 'next-firebase-auth';

import Link from 'next/link';

export const mainListItems = (
  <div>
    <Link
      href='/portal/dashboard'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </Link>
    <Link href='/notes' style={{ textDecoration: 'none', color: 'black' }}>
      <ListItem button>
        <ListItemIcon>
          <NotesIcon />
        </ListItemIcon>
        <ListItemText primary='Notes' />
      </ListItem>
    </Link>
    <Link
      href='/portal/template'
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary='Template' />
      </ListItem>
    </Link>
  </div>
);

export const SecondaryListItems = () => {
  const AuthUser = useAuthUser();

  return (
    // const AuthUser = useAuthUser();
    <div>
      {/* <ListSubheader inset>Manage </ListSubheader> */}
      <Link href='/settings' style={{ textDecoration: 'none', color: 'black' }}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary='Settings' />
        </ListItem>
      </Link>
      <ListItem
        button
        onClick={() => {
          console.log('clicked');
          AuthUser.signOut();
        }}
      >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary='Log Out' />
      </ListItem>
    </div>
  );
};
