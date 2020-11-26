//https://tailwindcss.com/docs/padding
const space = {
  m: [Object, Number, String, Array],
  mt: [Object, Number, String, Array],
  mr: [Object, Number, String, Array],
  mb: [Object, Number, String, Array],
  ml: [Object, Number, String, Array],
  mx: [Object, Number, String, Array],
  my: [Object, Number, String, Array],
  p: [Object, Number, String, Array],
  pt: [Object, Number, String, Array],
  pr: [Object, Number, String, Array],
  pb: [Object, Number, String, Array],
  pl: [Object, Number, String, Array],
  px: [Object, Number, String, Array],
  py: [Object, Number, String, Array],
  spaceX: [Object, Number, String, Array],
  spaceY: [Object, Number, String, Array]
}
//https://tailwindcss.com/docs/width
const sizing = {
  w: [Object, Number, String, Array],
  minW: [Object, Number, String, Array],
  maxW: [Object, Number, String, Array],
  h: [Object, Number, String, Array],
  minH: [Object, Number, String, Array],
  maxH: [Object, Number, String, Array]
}

const layout = {
  //https://tailwindcss.com/docs/display
  container: [Object, Boolean, String, Array],
  box: [String, Array],
  display: [Object, String, Array],
  block: [Object, Boolean, String, Array],
  hidden: [Object, Boolean, String, Array],
  inlineBlock: [Object, Boolean, String, Array],
  inline: [Object, Boolean, String, Array],
  flex: [Object, Boolean, String, Array],
  inlineFlex: [Object, Boolean, String, Array],
  grid: [Object, Boolean, String, Array],
  inlineGrid: [Object, Boolean, String, Array],

  float: [Object, String, Array],
  clear: [Object, String, Array],
  object: [Object, String, Array],


  flexGrow: [Object, String, Array],
  flexShrink: [Object, String, Array],

  absolute: [Object, Boolean, String, Array],
  relative: [Object, Boolean, String, Array],
  fixed: [Object, Boolean, String, Array],

  overflow: [Object, String, Array],
  overflowX: [Object, String, Array],
  overflowY: [Object, String, Array],
  scrolling: [Object, String, Array],
  //https://tailwindcss.com/docs/position
  position: [Object, Boolean, String, Array],
  inset: [Object, Number, String, Array],
  top: [Object, Number, String, Array],
  right: [Object, Number, String, Array],
  bottom: [Object, Number, String, Array],
  left: [Object, Number, String, Array],

  visible: [Object, Boolean, String, Array],
  invisible: [Object, Boolean, String, Array],
  //https://tailwindcss.com/docs/z-index
  z: [Object, Number, String, Array],

  textAlign: [Object, String, Array]
}

const backgrounds = {
  bg: [Object, String, Array]
}
const opacity = {
  opacity: [Object, Number, String, Array]
}

const transition = {
  transition: [String, Array],
  duration: [String, Number, Array],
  ease: [String, Array],
  delay: [String, Number, Array],
  animate: [String, Array],
}
const typography = {
  align: [Object, String, Array],
  color: [Object, String, Array],
  opacity: [Object, Number, String, Array],
  //https://tailwindcss.com/docs/font-size
  size: [Object, String, Array],
  weight: [Object, String, Array],
  normal: [Object, Boolean, String, Array],
  medium: [Object, Boolean, String, Array],
  bold: [Object, Boolean, String, Array],
  whitespace: [Object, String, Array],
  truncate: [Object, String, Array],
  uppercase: [Object, Boolean, String, Array],
  leading: [Object, Number, String, Array]
  //https://tailwindcss.com/docs/text-align
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
  direction: [Object, String, Array],
  wrap: [Object, String, Array],
  grow: [Object, String, Array],
  shrink: [Object, String, Array],
  justify: [Object, String, Array],
  items: [Object, String, Array]
}

const grid = {
  cols: [Object, Number, String, Array],
  rows: [Object, Number, String, Array],
  gap: [Object, Number, String, Array],
  gapX: [Object, Number, String, Array],
  gapY: [Object, Number, String, Array],
  gridFlow: [Object, String, Array],
  autoCols: [Object, String, Array],
  autoRows: [Object, String, Array]
}

const cursor = {
  cursor: [Object, String, Array]
}

const box = {
  ...space,
  ...opacity,
  ...transition,
  ...backgrounds,
  ...sizing,
  ...layout,
  ...cursor
}

export const mapProps = {
  typographyMap
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
