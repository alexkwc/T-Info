import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Router from './routers';

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
