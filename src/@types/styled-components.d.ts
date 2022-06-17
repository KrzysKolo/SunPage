import 'styled-components';

type ColorType = 'primary800' | 'primary700' | 'primary600' | 'primary500'| 'primary200' | 'primary100' | 'primary50'| 'grey900' | 'grey800'| 'grey700' | 'grey600' | 'grey500' | 'grey300' | 'grey200' | 'grey100' | 'grey50' | 'white' | 'beige' | 'green' ;
type FontFamilyType = 'poppins' | 'inter';
type FontSizeType = 'xl' | 'lg' | 'l' |  'm' | 's'  | 'xs';
type MediaQueryType = 'phone' | 'tablet' | 'desktop' | 'bigDesktop' ;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<ColorType, string>,
    font: {
      family: Record<FontFamilyType, string>,
      size: Record<FontSizeType, string>,
    },
    mq: Record<MediaQueryType, string>,
  }
}