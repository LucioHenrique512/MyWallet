import {RFPercentage} from 'react-native-responsive-fontsize';

export const theme = {
  size: {
    padding: RFPercentage(2),
    xs: RFPercentage(1.5),
    sm: RFPercentage(1.8),
    md: RFPercentage(2),
    lg: RFPercentage(2.5),
    xl: RFPercentage(3.4),
  },
  colors: {
    deepNight: '#142995',
    white: '#FFFFFF',
    turqBlue: '#12C2E9',
    limeGreen: '#A5FF32',
  },
};

export type ThemeType = typeof theme;
