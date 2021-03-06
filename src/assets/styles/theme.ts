import PaletColors from '../../assets/colors/PaletColors';

export const theme = {

  color: {
    beige: `${PaletColors["beige"]}`,
    green: `${PaletColors["green"]}`,
    red: `${PaletColors["red"]}`,
    white: `${PaletColors["white"]}`,
    primary800: `${PaletColors["primary-800"]}`,
    primary700: `${PaletColors["primary-700"]}`,
    primary600: `${PaletColors["primary-600"]}`,
    primary500: `${PaletColors["primary-500"]}`,
    primary200: `${PaletColors["primary-200"]}`,
    primary100: `${PaletColors["primary-100"]}`,
    primary50: `${PaletColors["primary-50"]}`,
    grey900: `${PaletColors["grey-900"]}`,
    grey800: `${PaletColors["grey-800"]}`,
    grey700: `${PaletColors["grey-700"]}`,
    grey600: `${PaletColors["grey-600"]}`,
    grey500: `${PaletColors["grey-500"]}`,
    grey300: `${PaletColors["grey-300"]}`,
    grey200: `${PaletColors["grey-200"]}`,
    grey100: `${PaletColors["grey-100"]}`,
    grey50: `${PaletColors["grey-50"]}`,
  },
  font: {
    size: {
      xl: '42px',
      lg: '38px',
      l: '36px',
      m: '18px',
      s: '16px',
      xs: '14px',
    },
    family: {
      inter: 'Inter, sans-serif',
      poppins: 'Poppins, sans-serif',
     },
  },
  mq: {
    phone: '@media (min-width: 412px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 960px)',
    mediumDesktop: '@media (min-width: 1420px)',
    bigDesktop: '@media (min-width: 1920px)',
  },
};