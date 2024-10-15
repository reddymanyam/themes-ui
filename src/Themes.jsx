import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: '#1976d2',
            },
            background: {
              default: '#f5f5f5',
              paper: '#ffffff',
            },
          }
        : {
            primary: {
              main: '#90caf9',
            },
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '20px',
            ...(mode === "light" && {
              backgroundColor: '#1976d2',
              color: '#ffffff',
            }),
            ...(mode === "dark" && {
              backgroundColor: '#90caf9',
              color: '#000000',
            }),
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            ...(mode === "light" && {
              color: '#1976d2',
            }),
            ...(mode === "dark" && {
              color: '#90caf9',
            }),
          },
        },
      },
    },
  });
};
