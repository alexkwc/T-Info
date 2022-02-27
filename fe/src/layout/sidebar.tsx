import { Box, Drawer } from '@mui/material';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {children}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default SidebarLayout;
