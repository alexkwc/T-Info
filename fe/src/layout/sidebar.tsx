import { Drawer } from '@mui/material';

function SidebarLayout({ children }) {
  return (
    <Drawer
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    >
      {children}
    </Drawer>
  );
}

export default SidebarLayout;
