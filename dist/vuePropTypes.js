"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//https://tailwindcss.com/docs/padding
var space = {
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
  py: [Object, Number, String, Array]
}; //https://tailwindcss.com/docs/width

var sizing = {
  w: [Object, Number, String, Array],
  minW: [Object, Number, String, Array],
  maxW: [Object, Number, String, Array],
  h: [Object, Number, String, Array],
  minH: [Object, Number, String, Array],
  maxH: [Object, Number, String, Array]
};
var layout = {
  //https://tailwindcss.com/docs/display
  display: [Object, String, Array],
  block: [Object, Boolean, String, Array],
  hidden: [Object, Boolean, String, Array],
  inlineBlock: [Object, Boolean, String, Array],
  inline: [Object, Boolean, String, Array],
  flex: [Object, Boolean, String, Array],
  inlineFlex: [Object, Boolean, String, Array],
  grid: [Object, Boolean, String, Array],
  inlineGrid: [Object, Boolean, String, Array],
  container: [Object, Boolean, String, Array],
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
};
var backgrounds = {
  bg: [Object, String, Array]
};
var typography = {
  props: {
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
    leading: [Object, Number, String, Array] //https://tailwindcss.com/docs/text-align

  },
  map: {
    opacity: 'text-opacity',
    color: 'text',
    align: 'text',
    size: 'text',
    weight: 'font',
    normal: 'font-bold',
    medium: 'font-bold',
    bold: 'font-bold'
  }
};
var flexbox = {
  direction: [Object, String, Array],
  wrap: [Object, String, Array],
  grow: [Object, String, Array],
  shrink: [Object, String, Array],
  justify: [Object, String, Array],
  items: [Object, String, Array]
};
var grid = {
  cols: [Object, Number, String, Array],
  rows: [Object, Number, String, Array],
  gap: [Object, Number, String, Array],
  gapX: [Object, Number, String, Array],
  gapY: [Object, Number, String, Array],
  gridFlow: [Object, String, Array],
  autoCols: [Object, String, Array],
  autoRows: [Object, String, Array]
};

var box = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, space), backgrounds), sizing), layout);

var _default = {
  box: box,
  space: space,
  backgrounds: backgrounds,
  sizing: sizing,
  typography: typography,
  layout: layout,
  flexbox: flexbox,
  grid: grid
};
exports["default"] = _default;