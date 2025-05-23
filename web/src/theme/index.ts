


import { createTheme } from '@mantine/core';

export const theme = createTheme({
  colorScheme: 'dark',

  fontFamily: 'Roboto',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
  },
});
