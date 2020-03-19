<template>
  <div id="app">
    <div id="nav">
      <router-link to="/green">Green</router-link> |
      <router-link to="/yellow">Yellow</router-link> |
      <router-link to="/red">Red</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
