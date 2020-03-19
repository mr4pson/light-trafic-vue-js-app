<template>
  <div class="green">
    <Lighter :activeIndex="index"/>
    <Timer/>
  </div>
</template>

<script>
import Lighter from '@/components/traffic-light/index.vue'
import Timer from '@/components/timer/index.vue'

export default {
  name: 'Green',
  components: {
    Lighter,
    Timer
  },
  data: () => {
    return {
      index: 2
    }
  }
}
</script>
