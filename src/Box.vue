<template functional>
  <div :class="$options.propsToClasses(data, props)" :style="data.style">
    <slot />
  </div>
</template>

<script>
import propTypes from './propTypes'
import { propsToClasses } from './propsToClasses'

export default {
  name: 'Box',
  props: {
    style: {},
    ...propTypes.box
  },
  propsToClasses(data, props) {
    const mapKeys = {
      'text-align': 'text',
      display: ''
    }
    return propsToClasses(data, props, { mapKeys })
  }
}
</script>
