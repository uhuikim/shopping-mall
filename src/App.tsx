import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reset } from 'styled-reset';

import { ThemeProvider } from 'styled-components';
import DefaultTheme from 'styles/defaultTheme';
import GlobalStyle from 'styles/GlobalStyle';
import routes from './routes';

const router = createBrowserRouter(routes);
function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
