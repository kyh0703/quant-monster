import GlobalStyle from './global.styles';
import { AppProvider } from './providers/app.provider';
import AppRouter from './routes';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <AppRouter />
    </AppProvider>
  );
};

export default App;
