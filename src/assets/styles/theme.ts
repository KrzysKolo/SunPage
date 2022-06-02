import PaletColors from '../../assets/colors/PaletColors';

export const theme = {
  color: {
    white: `${PaletColors["white"]}`,
    primary800: `${PaletColors["primary-800"]}`,
    primary600: `${PaletColors["primary-600"]}`,
    primary100: `${PaletColors["primary-100"]}`,
    primary50: `${PaletColors["primary-50"]}`,
    grey900: `${PaletColors["grey-900"]}`,
    grey800: `${PaletColors["grey-800"]}`,
    grey700: `${PaletColors["grey-700"]}`,
    grey50: `${PaletColors["grey-50"]}`,
  },
  font: {
    size: {
      xl: '2.625rem',
      lg: '2.25rem',
      l: '2rem',
      m: '1.125rem',
      s: '1rem',
      xs: '0.875rem',
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
    bigDesktop: '@media (min-width: 1550px)',
  },
};