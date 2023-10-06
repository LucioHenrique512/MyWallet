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
    background: '#142995',
    foreground: '#FFFFFF',
    primaryColor: '#12C2E9',
    secondaryColor: '#A5FF32',
  },
};

export type ThemeType = typeof theme;
