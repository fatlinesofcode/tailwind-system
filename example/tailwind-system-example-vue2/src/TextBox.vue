<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
// import { propsToClasses, vuePropTypes, vueMapProps } from 'tailwind-system'
import {propsToClasses, vuePropTypes, vueMapProps} from "../../../src";

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
      return propsToClasses(this.$props, classNameProps, {mapKeys})
    }
  }
}
</script>
