import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { store } from './features/redux/store';
import { Provider, useSelector } from 'react-redux';

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

function App() {
  const mode = useSelector((state) => state.color.colorMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <div className='App'>
          
        </div>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
