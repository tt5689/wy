import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import classfiy from './classfiy'
import home from './home'
import mine from './mine'
import shopcar from './shopCar'
import recognize from './recognize'
import zyyhotsales from './zyyhotsales'
import zyyspecialoffer from './zyyspecialoffer'
import zyynewproduct from './zyynewproduct'
import zyygoodreputation from './zyygoodreputation'
import zyysupervip from './zyysupervip'
import canteen from './canteen'
import newPerson from './newPerson'
import timeBy from './timeby'
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home",
    },
    classfiy,
    home,
    mine,
    shopcar,
    recognize,
    timeBy,
    zyyhotsales,
    zyyspecialoffer,
    zyynewproduct,
    zyygoodreputation,
    zyysupervip,
    canteen,
    newPerson
  ]
})
