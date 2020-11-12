"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsToClasses = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dashCase = function dashCase(str) {
  return str.replace(/[A-Z]/g, function (m) {
    return '-' + m.toLowerCase();
  });
};
/*
// Small (sm)
@media (min-width: 640px) {}

// Medium (md)
@media (min-width: 768px) { }

// Large (lg)
@media (min-width: 1024px) { }

// Extra Large (xl)
@media (min-width: 1280px) {  }
*/


var getBreakPoints = function getBreakPoints(values) {
  if (values.length <= 3) {
    return ['', 'md', 'lg'];
  } else {
    return ['', 'sm', 'md', 'lg', 'xl'];
  }
};

var objectToClassNames = function objectToClassNames(_ref) {
  var value = _ref.value,
      key = _ref.key,
      mapKeys = _ref.mapKeys;
  var breakpoints = Object.keys(value);
  var names = breakpoints.reduce(function (acc, breakpoint) {
    var val = value[breakpoint];
    return [].concat(_toConsumableArray(acc), [toClassName({
      value: val,
      key: key,
      breakpoint: breakpoint,
      mapKeys: mapKeys
    })]);
  }, []);
  return names.join(' ');
};

var arrayToClassNames = function arrayToClassNames(_ref2) {
  var value = _ref2.value,
      key = _ref2.key,
      mapKeys = _ref2.mapKeys;
  var classNameBreakpoints = getBreakPoints(value);
  var names = value.reduce(function (acc, val, index) {
    var breakpoint = classNameBreakpoints[index];
    return [].concat(_toConsumableArray(acc), [toClassName({
      value: val,
      key: key,
      breakpoint: breakpoint,
      mapKeys: mapKeys
    })]);
  }, []);
  return names.join(' ');
};
/**
 *
 * @param value
 * @param key
 * @param mapKeys
 * @param breakpoint
 * @returns {string|null}
 */


var toClassName = function toClassName(_ref3) {
  var value = _ref3.value,
      key = _ref3.key,
      mapKeys = _ref3.mapKeys,
      _ref3$breakpoint = _ref3.breakpoint,
      breakpoint = _ref3$breakpoint === void 0 ? '' : _ref3$breakpoint;
  var classNameKey = dashCase(key);
  var name = mapKeys && mapKeys[classNameKey] !== undefined ? mapKeys[classNameKey] : classNameKey;
  var breakpointPrefix = breakpoint ? breakpoint + ':' : '';

  if (typeof value === 'boolean') {
    return value ? "".concat(breakpointPrefix).concat(name) : null;
  } else if (value === '') {
    //assume is true
    return "".concat(breakpointPrefix).concat(name);
  } else {
    var prefix = name === '' ? '' : "".concat(name, "-");

    if (parseInt(value) < 0) {
      return "-".concat(breakpointPrefix).concat(prefix).concat(Math.abs(value));
    }

    return "".concat(breakpointPrefix).concat(prefix).concat(value);
  }
};
/***
 *
 * @param props
 * @param mapKeys
 * @returns {*[]}
 */


var reduceClassNames = function reduceClassNames(_ref4) {
  var props = _ref4.props,
      mapKeys = _ref4.mapKeys;
  var propsKeys = Object.keys(props);
  return Object.keys(props).filter(function (name) {
    return propsKeys.find(function (key) {
      return key === name;
    });
  }).reduce(function (acc, key) {
    var value = props[key];

    if (value !== undefined) {
      var className = toClassName({
        value: value,
        key: key,
        mapKeys: mapKeys
      });

      if (Array.isArray(value)) {
        // css classname exists for breakpoint
        className = arrayToClassNames({
          value: value,
          key: key,
          mapKeys: mapKeys
        });
      } else if (_typeof(value) === 'object') {
        className = objectToClassNames({
          value: value,
          key: key,
          mapKeys: mapKeys
        });
      }

      if (className) {
        return [].concat(_toConsumableArray(acc), [className]);
      }
    }

    return acc;
  }, []);
};

var classesToString = function classesToString(arr) {
  return arr.filter(function (arr) {
    return arr.length > 0;
  }).join(' ');
};
/**
 *
  const mapKeys = {
      'text-align': 'text',
      display: ''
    }
 const classNameProps = propTypes.box
 const classNames = propsToClasses(props, classNameProps, { mapKeys })
 const classNames = computed( () => propsToClasses(props, classNameProps, { mapKeys }))
 *
 * @param data
 * @param props
 * @param options
 * @returns {string|*}
 */


var propsToClasses = function propsToClasses(props, classNameProps) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var mapKeys = options.mapKeys;
  var classProps = {};
  Object.keys(classNameProps).forEach(function (key) {
    classProps[key] = props[key];
  });
  return classesToString(reduceClassNames({
    props: classProps,
    mapKeys: mapKeys
  }));
};

exports.propsToClasses = propsToClasses;