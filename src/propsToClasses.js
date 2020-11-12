const dashCase = str => str.replace(/[A-Z]/g, m => '-' + m.toLowerCase())

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
const getBreakPoints = values => {
  if (values.length <= 3) {
    return ['', 'md', 'lg']
  } else {
    return ['', 'sm', 'md', 'lg', 'xl']
  }
}

const objectToClassNames = ({ value, key, mapKeys }) => {
  const breakpoints = Object.keys(value)
  const names = breakpoints.reduce((acc, breakpoint) => {
    const val = value[breakpoint]
    return [...acc, toClassName({ value: val, key, breakpoint, mapKeys })]
  }, [])
  return names.join(' ')
}
const arrayToClassNames = ({ value, key, mapKeys }) => {
  const classNameBreakpoints = getBreakPoints(value)
  const names = value.reduce((acc, val, index) => {
    const breakpoint = classNameBreakpoints[index]
    return [...acc, toClassName({ value: val, key, breakpoint, mapKeys })]
  }, [])
  return names.join(' ')
}
/**
 *
 * @param value
 * @param key
 * @param mapKeys
 * @param breakpoint
 * @returns {string|null}
 */
const toClassName = ({ value, key, mapKeys, breakpoint = '' }) => {
  const classNameKey = dashCase(key)
  const name = mapKeys && mapKeys[classNameKey] !== undefined ? mapKeys[classNameKey] : classNameKey
  const breakpointPrefix = breakpoint ? breakpoint + ':' : ''
  if (typeof value === 'boolean') {
    return value ? `${breakpointPrefix}${name}` : null
  } else if (value === '') {
    //assume is true
    return `${breakpointPrefix}${name}`
  } else {
    const prefix = name === '' ? '' : `${name}-`
    if (parseInt(value) < 0) {
      return `-${breakpointPrefix}${prefix}${Math.abs(value)}`
    }
    return `${breakpointPrefix}${prefix}${value}`
  }
}

/***
 *
 * @param props
 * @param mapKeys
 * @returns {*[]}
 */
const reduceClassNames = ({ props, mapKeys }) => {
  const propsKeys = Object.keys(props)
  return Object.keys(props)
    .filter(name => propsKeys.find(key => key === name))
    .reduce((acc, key) => {
      let value = props[key]
      if (value !== undefined) {
        let className = toClassName({ value, key, mapKeys })
        if (Array.isArray(value)) {
          // css classname exists for breakpoint
          className = arrayToClassNames({ value, key, mapKeys })
        } else if (typeof value === 'object') {
          className = objectToClassNames({ value, key, mapKeys })
        }
        if (className) {
          return [...acc, className]
        }
      }
      return acc
    }, [])
}
const classesToString = arr => arr.filter(arr => arr.length > 0).join(' ')
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
export const propsToClasses = (props, classNameProps, options = {}) => {
  const { mapKeys } = options

  const classProps = {}
  Object.keys(classNameProps).forEach((key) => {
    classProps[key] = props[key]
  })


  return classesToString(reduceClassNames({ props:classProps, mapKeys }))
}
