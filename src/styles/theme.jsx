export const theme = {
  colors: {
    accent: '#44bd32',
    // accentHover: '#10544f',

    black: '#000000',
    white: '#ffffff',
    green: '#4cd137',
    yellow: '#fbc531',
    red: '#e84118',

    textColorLight: '#f5f6fa',
    textColorDark: '#2f3640',
    titleColorLight: '#dcdde1',
    titleColorDark: '#353b48',
    backgroundColorLight: '#dcdde1',
    backgroundColorDark: '#353b48',
    backgroundColorButton: '#9a9ca4',
    backgroundColorButtonHover: '#535863',

    linearGradient:
      'radial-gradient(circle at 50% 50%, #f5f6fa 0%, #44bd32 100%)',
    boxShadow: '0px 0px 10px 0px #44bd32',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '32px',
  },
  spacing: value => `${4 * value}px`,

  shadows: {
    boxShadow: '0px 0px 10px 0px #44bd32',
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
};
