import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { store } from './features/redux/store';
import { Provider, useSelector } from 'react-redux';
import Container from './features/components/Container';

const ProviderWrap = ({ children }) => {
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

function App() {
  return (
    <Provider store={store}>
      <ProviderWrap>
        <div className='App'>
          <Container />
        </div>
      </ProviderWrap>
    </Provider>
  );
}

export default App;
