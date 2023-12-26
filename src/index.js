import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Car from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Car color="yellow" />
  </StrictMode>
);
