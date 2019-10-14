import { Button, Tab, Tabs, Divider, NavBar, Swipe, SwipeItem, Step, Steps, Row, Col, Icon, Sticky } from 'vant'
import Vue from 'vue'

Vue.component(Button.name, Button)
Vue.component(Tab.name, Tab)
Vue.component(Tabs.name, Tabs)
Vue.component(Step.name, Step)
Vue.component(Steps.name, Steps)
Vue.component(Divider.name, Divider)
Vue.component(NavBar.name, NavBar)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Row)
  .use(Col)
  .use(Icon)
  .use(Sticky)

