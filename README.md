# tailwind-system
Inspired by [Styled System](https://styled-system.com), tailwind-system allow you add props to your components which are then converted to [Tailwind](https://tailwindcss.com) utility classes. It can be used with Vue or React.

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
<div class="mt-1 sm:mt-2 md:mt-3 p-2 bg-red-50 lg:block hidden text-center">My Box</div>
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
### usage
```vue
<TextBox bold align="center" :opacity="90">bold text</TextBox>
```
### html
```html
<div class="text-opacity-90 text-center font-bold">bold text</div>
```

## Responsive Style Props

Set responsive width, margin, padding, font-size, and other properties with a shorthand array/object syntax.
[Read more](https://styled-system.com/responsive-styles)

```vue
<Box :m="[ 1, 2, 3, 4 ]">responsive margin</Box>
<Box :m="{md:3, sm:1}">responsive margin</Box>
```

### html
```html
<div class="m-1 sm:m-2 md:m-3 lg:m-4">responsive margin</div>
<div class="sm:m-1 md:m-3">responsive margin</div>
```

## Use custom responsive logic for array values
```js
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
propsToClasses(this.$props, classNameProps, {getBreakPoints})

```

## Available props

[Full list](https://github.com/fatlinesofcode/tailwind-system/blob/main/src/vue/vuePropTypes.js)

```js
export const propTypes = {
  box,
  space,
  backgrounds,
  sizing,
  typography,
  layout,
  flexbox,
  grid
}
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

## React box
```jsx
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
  )
}

Box.propTypes = propTypes

export default Box

```

### usage
```jsx
<Box mt={1} block pt={[1,2,3]} bg={'red'}>Box example</Box>
```
