<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  #app{
    display: flex;
    width: 100%;
    height: 100vh;
    font-family: Verdana,serif;
  }
  h1{
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
</style>
