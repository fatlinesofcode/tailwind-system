<template>
  <div id="app">
    <Box display="inline-block">
      <img alt="Vue logo" src="./assets/logo.png">
    </Box>

    <Box :mt="[1,2,3]" p="2" bg="red-50" hidden :block="{lg:true}" text-align="center">My Box</Box>
    <TextBox bold align="center" :opacity="90">bold text</TextBox>
  </div>
</template>

<script>

import Box from "./Box";
import TextBox from "./TextBox";
export default {
  name: 'App',
  components: {
    TextBox,
    Box
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
