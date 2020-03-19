<template>
  <div class="yellow">
    <Lighter :activeIndex="index"/>
    <Timer/>
  </div>
</template>

<script>
import Lighter from '@/components/traffic-light/index.vue'
import Timer from '@/components/timer/index.vue'

export default {
  name: 'Yellow',
  components: {
    Lighter,
    Timer
  },
  data: () => {
    return {
      index: 1
    }
  }
}
</script>
