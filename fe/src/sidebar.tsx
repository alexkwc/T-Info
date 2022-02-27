import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from 'react';

function Sidebar(): ReactElement {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key="home" onClick={() => navigate('/')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="test" onClick={() => navigate('/test')}>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
