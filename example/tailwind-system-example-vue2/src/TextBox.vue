<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
import { propsToClasses, vuePropTypes, vueMapProps } from 'tailwind-system'
// import {propsToClasses, vuePropTypes, vueMapProps} from '../../../dist'


const getBreakPoints = values => {
  if (values.length <= 2) {
    return ['', 'lg']
  }
  else if (values.length <= 3) {
    return ['', 'md', 'lg']
  } else {
    return ['', 'sm', 'md', 'lg', 'xl']
  }
}

const classNameProps = {
  ...vuePropTypes.box,
  ...vuePropTypes.typography
}
export default {
  name: 'TextBox',
  props : {
    ...classNameProps
  },
  computed : {
    classNames(){
      const mapKeys = {
        ...vueMapProps.typographyMap
      }
      return propsToClasses(this.$props, classNameProps, {mapKeys, getBreakPoints})
    }
  }
}
</script>
