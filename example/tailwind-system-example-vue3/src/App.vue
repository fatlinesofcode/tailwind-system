<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Box :pt="[1,2,3]" bg="red">box</Box>
</template>

<script>
import Box from './components/Box.vue'

export default {
  name: 'App',
  components: {
    Box
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
