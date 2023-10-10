import {RFPercentage} from 'react-native-responsive-fontsize';

export const theme = {
  size: {
    xxxs: `${RFPercentage(0.5)}px`,
    xxs: `${RFPercentage(1)}px`,
    xs: `${RFPercentage(1.5)}px`,
    sm: `${RFPercentage(1.75)}px`,
    md: `${RFPercentage(2)}px`,
    lg: `${RFPercentage(2.5)}px`,
    xl: `${RFPercentage(3.5)}px`,
    xxl: `${RFPercentage(4.0)}px`,
    padding: `${RFPercentage(2.5)}px`,
  },
  colors: {
    deepNight: '#142995',
    white: '#FFFFFF',
    turqBlue: '#12C2E9',
    limeGreen: '#A5FF32',
    lightGray: '#EEEEEE',
    mediumGray: '#BBBBBB',
    charcoal: '#111111',
    softGray: '#EEEEEE',
  },
};

export type ThemeType = typeof theme;
