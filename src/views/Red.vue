<template>
  <div class="red">
    <Lighter :activeIndex="index"/>
    <Timer/>
  </div>
</template>

<script>
import Lighter from '@/components/traffic-light/index.vue'
import Timer from '@/components/timer/index.vue'

export default {
  name: 'Red',
  components: {
    Lighter,
    Timer
  },
  data: () => {
    return {
      index: 0
    }
  }
}
</script>
