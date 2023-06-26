import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Button from '@/app/ui/button/button.component';
import Spinner from '@/app/ui/spinner/spinner.component';

import { store } from '@/app/store';
import { darkTheme, lightTheme } from '@/app/theme';

const ErrorFallback = () => {
  return (
    <div>
      <h2>Ooops, somthine went wrong :</h2>
      <Button>Refresh</Button>
    </div>
  );
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <ThemeProvider theme={darkTheme}>
              <Router>{children}</Router>
            </ThemeProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>
    </Provider>
  );
};
