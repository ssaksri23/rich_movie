import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@mantine/core/styles.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router, AppRouter } from './app/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './app/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './lib/deviceTheme';
import { createTheme, MantineProvider } from '@mantine/core';
import GlobalStyles from './GlobalStyles';

const queryClient = new QueryClient();

const mantineTheme = createTheme({
  /** Your theme override here */
});

const appRouter: AppRouter = router;

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RootLayout>
          <MantineProvider theme={mantineTheme}>
            <RouterProvider router={appRouter} />
          </MantineProvider>
        </RootLayout>
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen=s{false} /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
