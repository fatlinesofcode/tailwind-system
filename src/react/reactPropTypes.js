import PropTypes from 'prop-types'

const propType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.bool,
  PropTypes.string,
  PropTypes.array,
  PropTypes.object,
])
//https://tailwindcss.com/docs/padding
const space = {
  m: propType,
  mt: propType,
  mr: propType,
  mb: propType,
  ml: propType,
  mx: propType,
  my: propType,
  p: propType,
  pt: propType,
  pr: propType,
  pb: propType,
  pl: propType,
  px: propType,
  py: propType,
  spaceX: propType,
  spaceY: propType
}
//https://tailwindcss.com/docs/width
const sizing = {
  w: propType,
  minW: propType,
  maxW: propType,
  h: propType,
  minH: propType,
  maxH: propType
}
//https://tailwindcss.com/docs/display
const layout = {
  container: propType,
  box: propType,
  display: propType,
  block: propType,
  hidden: propType,
  inlineBlock: propType,
  inline: propType,
  flex: propType,
  inlineFlex: propType,
  grid: propType,
  inlineGrid: propType,

  float: propType,
  clear: propType,
  object: propType,


  flexGrow: propType,
  flexShrink: propType,

  absolute: propType,
  relative: propType,
  fixed: propType,

  overflow: propType,
  overflowX: propType,
  overflowY: propType,
  scrolling: propType,
  //https://tailwindcss.com/docs/position
  position: propType,
  inset: propType,
  top: propType,
  right: propType,
  bottom: propType,
  left: propType,

  visible: propType,
  invisible: propType,
  //https://tailwindcss.com/docs/z-index
  z: propType,

  textAlign: propType
}

const border = {
  rounded: propType,
  border: propType,
  borderColor: propType,
  borderOpacity: propType,
  borderStyle: propType,
}
const borderMap = {
  'border-color': 'border',
  'border-style': 'border',
}
const backgrounds = {
  bg: propType,
  border: propType,
}

const opacity = {
  opacity: propType
}

const transition = {
  transition: propType,
  duration: propType,
  ease: propType,
  delay: propType,
  animate: propType,
}
//https://tailwindcss.com/docs/font-size
//https://tailwindcss.com/docs/text-align
const typography = {
  align: propType,
  color: propType,
  opacity: propType,
  size: propType,
  weight: propType,
  normal: propType,
  medium: propType,
  bold: propType,
  whitespace: propType,
  truncate: propType,
  uppercase: propType,
  leading: propType
}
const typographyMap = {
  opacity: 'text-opacity',
  color: 'text',
  align: 'text',
  size: 'text',
  weight: 'font',
  normal: 'font-bold',
  medium: 'font-bold',
  bold: 'font-bold'
}

const flexbox = {
  direction: propType,
  wrap: propType,
  grow: propType,
  shrink: propType,
  justify: propType,
  items: propType
}

const grid = {
  cols: propType,
  rows: propType,
  gap: propType,
  gapX: propType,
  gapY: propType,
  gridFlow: propType,
  autoCols: propType,
  autoRows: propType
}

const cursor = {
  cursor: propType
}

const box = {
  ...space,
  ...opacity,
  ...transition,
  ...backgrounds,
  ...sizing,
  ...layout,
  ...cursor,
  ...border,
}

export const mapProps = {
  typographyMap,
  borderMap
}
export const propTypes = {
  box,
  space,
  backgrounds,
  sizing,
  typography,
  layout,
  flexbox,
  grid
}


