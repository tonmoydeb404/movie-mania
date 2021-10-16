import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Global from './assets/styles/Global.styles';

const WithMUI = ({ children }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: '#e50914',
                    },
                    secondary: {
                        main: '#2a2a2a',
                    },
                },
            }),
        [prefersDarkMode]
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <Global />
                    <CssBaseline />
                    {children}
                </StyledEngineProvider>
            </ThemeProvider>
        </>
    );
};

export default WithMUI;
