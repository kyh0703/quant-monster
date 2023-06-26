import { DefaultTheme } from 'styled-components';

import palette from '@/lib/styles/palette.lib';

export const darkTheme: DefaultTheme = {
  id: 'dark',
  LogoColor: 'red',
  background: palette.black9,
  color: 'white',
  error: 'red',
};
