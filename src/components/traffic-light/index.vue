<template>
  <div class="trafic-light">
    <div
      v-for="(light, index) in lights"
      :key="light.time"
      class="light"
      :class="[
        light.class,
        light.active ? 'active' : '',
        index === getActiveIndex() && isLightEnding ? 'flash' : ''
      ]"
    >
      <div class="content"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
