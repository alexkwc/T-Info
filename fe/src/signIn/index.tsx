import {
  Alert,
  Avatar,
  Box, Button, Checkbox, FormControlLabel, TextField, Typography,
} from '@mui/material';
import {
  browserLocalPersistence, browserSessionPersistence, setPersistence, signInWithEmailAndPassword,
} from 'firebase/auth';
import { FormEvent, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { useFirebaseContext } from '../provider/firebase';

function SignInPage() {
  const auth = useFirebaseContext();
  const [error, setError] = useState<string | undefined>();
  const [remember, setRemember] = useState<boolean>(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-undef
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    const data = new FormData(event.currentTarget);
    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, data.get('email').toString(), data.get('password').toString());
      setError(undefined);
      navigate('/');
    } catch (err) {
      setError(err.code);
    }
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      {error && <Alert severity="error">{error}</Alert>}
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox checked={remember} onChange={() => setRemember((x) => !x)} value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        {/* <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid> */}
      </Box>
    </Box>
  );
}

export default SignInPage;
