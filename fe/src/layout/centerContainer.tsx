import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

function CenterContainerLayout() {
  return (
    <Container maxWidth="sm">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default CenterContainerLayout;
