import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

import Container from './Layout/Container';
import Router from './Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <Router />
    </Container>
  </React.StrictMode>
);
