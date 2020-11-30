import React from 'react'
import { propsToClasses, reactPropTypes } from 'tailwind-system'

const propTypes = {
  ...reactPropTypes.box,
}

const Box = ({children, ...props}) => {
  const classNames = propsToClasses(props, propTypes)
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

Box.propTypes = propTypes

export default Box
