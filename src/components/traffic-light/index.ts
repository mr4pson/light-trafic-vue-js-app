import { Vue } from 'vue-property-decorator'
import router from '@/router'
import store from '@/store'

interface Light {
  class: string;
  time: number;
  active?: boolean;
}

export default Vue.extend({
  name: 'traficLight',
  props: {
    activeIndex: {
      type: Number
    }
  },
  data: () => {
    return {
      lights: [
        {
          name: 'Red',
          class: 'red-light',
          time: 10,
          active: false
        },
        {
          name: 'Yellow',
          class: 'yellow-light',
          time: 3,
          active: false
        },
        {
          name: 'Green',
          class: 'green-light',
          time: 15,
          active: false
        }
      ],
      isLightEnding: false,
      changeLightFunc: 0,
      checkForStateTimeChangesFunc: 0
    }
  },
  methods: {
    setInitActive: function () {
      this.lights[this.activeIndex].active = true
    },
    changeLight: function (time: number) {
      return setTimeout(() => {
        let index = this.getActiveIndex()
        this.checkDirection()
        this.lights[index].active = false
        store.state.isDirectionAsc ? index++ : index--
        this.lights[index].active = true
        router.push({ name: this.lights[index].name })
      }, time * 1000)
    },
    checkDirection: function () {
      if (store.state.isDirectionAsc && (this.getActiveIndex() === this.lights.length - 1)) {
        store.commit('changeDirection')
      }
      if (!store.state.isDirectionAsc && (this.getActiveIndex() === 0)) {
        store.commit('changeDirection')
      }
    },
    getActiveIndex: function () {
      return this.lights.findIndex((light: Light) => light.active)
    },
    checkForStateTimeChanges: function () {
      return setInterval(() => {
        this.isLightEnding = store.state.isLightEnding
      }, 100)
    }
  },
  mounted () {
    const timeValue = localStorage.getItem('timer') ? localStorage.getItem('timer')?.toString() : ''
    const time: number = Number.parseInt(timeValue ? timeValue.toString() : '')
    if (time > 0) {
      store.commit('changeTime', time)
    }
  },
  created: function () {
    this.setInitActive()
    const time = this.lights[this.activeIndex].time
    store.commit('changeTime', time)
    this.changeLightFunc = this.changeLight(time)
    this.checkForStateTimeChangesFunc = this.checkForStateTimeChanges()
  },
  beforeDestroy: function () {
    clearInterval(this.changeLightFunc)
    clearInterval(this.checkForStateTimeChangesFunc)
  }
})
