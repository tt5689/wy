import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import classfiy from './classfiy'
import home from './home'
import mine from './mine'
import shopcar from './shopCar'
import recognize from './recognize'
import canteen from './canteen'
import newPerson from './newPerson'
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    classfiy,
    home,
    mine,
    shopcar,
    recognize,
    canteen,
    newPerson
  ]
})
