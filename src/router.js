import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/01_HelloWorld.vue'
import Template from './views/02_Template.vue'
import ComputedAndWatch from './views/03_ComputedAndWatch.vue'
import ClassAndStyleBind from './views/04_ClassAndStyleBind.vue'
import ConditionRender from './views/05_ConditionRender.vue'
import ListRender from './views/06_ListRender'
import FilterAndSortedList from './views/07_FilterAndSortedList'
import Event from './views/08_Event'
import FormInputBind from './views/09_FormInputBind'
import LifeCycle from './views/10_LifeCycle'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/01_HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/02_Template',
      name: 'Template',
      component: Template,
    },
    {
      path: '/03_ComputedAndWatch',
      name: 'ComputedAndWatch',
      component: ComputedAndWatch,
    },
    {
      path: '/04_ClassAndStyleBind',
      name: 'ClassAndStyleBind',
      component: ClassAndStyleBind,
    },
    {
      path: '/05_ConditionRender',
      name: 'ConditionRender',
      component: ConditionRender,
    },
    {
      path: '/06_ListRender',
      name: 'ListRender',
      component: ListRender,
    },
    {
      path: '/07_FilterAndSortedList',
      name: 'FilterAndSortedList',
      component: FilterAndSortedList,
    },
    {
      path: '/08_Event',
      name: 'Event',
      component: Event,
    },
    {
      path: '/09_FormInputBind',
      name: 'FormInputBind',
      component: FormInputBind,
    },
    {
      path: '/10_LifeCycle',
      name: 'LifeCycle',
      component: LifeCycle,
    }
  ]
})
