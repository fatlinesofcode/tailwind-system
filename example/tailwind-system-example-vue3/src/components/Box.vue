<template>
  <component :is="tag" :class="classNames">
    <slot />
  </component>
</template>

<script>
import { ref, computed } from "vue";
import { propsToClasses, vuePropTypes } from 'tailwind-system'
const classNameProps = vuePropTypes.box
export default {
  name: 'Box',
  props: {
    tag: { type: String, default: 'div' },
    ...classNameProps
  },
  setup(props){
    const mapKeys = {
      'text-align': 'text',
      display: ''
    }
    const classNames = computed( () => propsToClasses(props, classNameProps, { mapKeys }))
    return {
      tag : props.tag || 'div',
      classNames
    }
  }
}
</script>
