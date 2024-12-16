import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import { router } from "./routes/index.js";
import AuthContextProvider from "./Context/authContext.js";
import { Provider } from 'react-redux';
import { store } from './pages/slice/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
    </Provider>
  </StrictMode>
);
