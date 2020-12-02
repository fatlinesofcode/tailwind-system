<template>
  <div id="app">
    <Box display="inline-block">
      <img alt="Vue logo" src="./assets/logo.png">
    </Box>
    <Box >
      <Box :mt="[1,2,3]" p="2" bg="red-50" hidden :block="{lg:true}"
           text-align="center" mx="auto" maxW="md"
           border rounded="md" border-color="blue-100">My Box</Box>
    </Box>

    <Box :m="[ 1, 2, 3, 4 ]">responsive margin</Box>

    <TextBox bold align="center" :opacity="90" :mt="[1,5]">bold text</TextBox>
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
