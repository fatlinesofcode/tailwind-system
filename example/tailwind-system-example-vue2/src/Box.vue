<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
import { propsToClasses, vuePropTypes } from 'tailwind-system'
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
        'text-align': 'text', // change text-align="center" props to tailwind `text-center` class
        'display': '',
      }
      return propsToClasses(this.$props, classNameProps, {mapKeys})
    }
  }
}
</script>
