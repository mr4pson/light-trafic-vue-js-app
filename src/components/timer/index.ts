import { Vue } from 'vue-property-decorator'
import store from '@/store'

export default Vue.extend({
  name: 'Timer',
  data: () => {
    return {
      timer: 0,
      startTimerFunc: 0
    }
  },
  methods: {
    startTimer: function () {
      return setInterval(() => {
        if (this.timer <= 3) {
          store.commit('changeLightEnding', true)
        }
        this.timer--
        localStorage.setItem('timer', this.timer.toString())
        store.commit('changeTime', this.timer)
      }, 1000)
    }
  },
  created: function () {
    this.timer = store.state.timer
    store.commit('changeLightEnding', false)
    this.startTimerFunc = this.startTimer()
  },
  beforeDestroy: function () {
    clearInterval(this.startTimerFunc)
  }
})
