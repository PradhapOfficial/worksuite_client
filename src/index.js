import React from 'react';
import './index.css';

import {Main} from './main/components/Main';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('worksuiteMainContainer'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
        <Routers />
    </BrowserRouter> */}
    <Main/>
    {/* <Login/> */}
  </React.StrictMode>
);