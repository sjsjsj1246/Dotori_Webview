// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports
import { common } from './common';

const light: DefaultTheme = {
  mode: 'light',
  colors: {
    ...common.colors,
    toggleBorder: '#6d6d6d',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
    background: '#545454',
    headerBg: '#20232A',
    cardsBg: '#FFFFFF',
    textColor: '#000000',
    buttonText: '#FFFFFF',
    dodgerBlue: '#007BFF',
  },
};

export { light };
