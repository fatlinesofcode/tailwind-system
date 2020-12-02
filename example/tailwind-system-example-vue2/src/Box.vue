<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
// import { propsToClasses, vuePropTypes } from 'tailwind-system'
import { propsToClasses, vuePropTypes, vueMapProps } from '../../../dist'
const classNameProps = {
  ...vuePropTypes.box
}
export default {
  name: 'Box',
  props : {
    ...classNameProps
  },
  computed : {
    classNames(){
      const mapKeys = {
        ...vueMapProps.borderMap,
        'text-align': 'text', // change text-align="center" props to tailwind `text-center` class
        'display': '',
      }
      console.log('26', 'computed', 'classNames', vueMapProps)
      return propsToClasses(this.$props, classNameProps, {mapKeys})
    }
  }
}
</script>
