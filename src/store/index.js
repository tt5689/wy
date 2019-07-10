import Vue from 'vue'
import Vuex from 'vuex'
import car from './car'
import home from './home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    home,
    car
}
})

export default store;