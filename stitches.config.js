// stitches.config.js
import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    // https://system-ui.com/theme/
    // https://stitches.dev/docs/tokens
    colors: {
      none: '#00000000',
      primary: '#000000',
      transparent: '#00000000',
    },
    fontSizes: {},
    fonts: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    space: {
      dialogPadding: '24px',
      iconLength: '16px',
      innerPaddingX: '20px',
      mobilePadding: '21px',
      contentWidthDesktop: '704px',
      contentWidthMid: '796px',
      contentWidthFull: '888px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    desktop: '(min-width: 744px)',
    mid: '(min-width: 936px)',
    full: '(min-width: 1128px)',
  },
  utils: {
    // margins
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // padding
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // width/height together
    size: (value) => ({
      width: value,
      height: value,
    }),
  },
})
