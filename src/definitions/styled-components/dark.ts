// #region Global Imports
import { DefaultTheme } from 'styled-components';
// #endregion Global Imports
import { common } from './common';

const dark: DefaultTheme = {
  mode: 'dark',
  colors: {
    ...common.colors,
    toggleBorder: '#efefef',
    gradient: 'linear-gradient(#091236, #1E215D)',
    background: '#949494',
    headerBg: '#1A1C22',
    cardsBg: '#1A1C22',
    textColor: '#FFFFFF',
    buttonText: '#1A1C22',
    dodgerBlue: '#0062CC',
  },
};

export { dark };
