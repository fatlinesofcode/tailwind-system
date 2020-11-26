# tailwind-system
Inspired by [Styled System](https://styled-system.com) tailwind-system allow you add props to your components which they then converted to [Tailwind](https://tailwindcss.com) utility classes.

## install
```bash
npm install tailwind-system
```

## create a box (vue 2)
```vue
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

```
## usage of Box.vue
props can be static values, variables and arrays / objects for responsive values.
```vue
<Box :mt="[1,2,3]" p="2" bg="red-50" hidden :block="{lg:true}" text-align="center">My Box</Box>
```
will render the html
```html
<div class="mt-1 md:mt-2 lg:mt-3 p-2 bg-red-50 lg:block hidden text-center">My Box</div>
```

## create a TextBox (vue 2)
```vue

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
import { propsToClasses, vuePropTypes, vueMapProps } from 'tailwind-system'

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

```
usage
```vue
<TextBox bold align="center" :opacity="90">bold text</TextBox>
```
html
```html
<div class="text-opacity-90 text-center font-bold">bold text</div>
```


## Vue 3 box
```vue
<template>
  <component :is="tag" :class="classNames">
    <slot />
  </component>
</template>

<script>
import { computed } from "vue";
import { propsToClasses, vuePropTypes } from 'tailwind-system'
const classNameProps = vuePropTypes.box
export default {
  name: 'Box',
  props: {
    tag: { type: String, default: 'div' },
    ...classNameProps
  },
  setup(props){
    const classNames = computed( () => propsToClasses(props, classNameProps))
    return {
      tag : props.tag,
      classNames
    }
  }
}
</script>

```
