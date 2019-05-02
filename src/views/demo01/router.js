import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/01_HelloWorld.vue'
import Template from './components/02_Template.vue'
import ComputedAndWatch from './components/03_ComputedAndWatch.vue'
import ClassAndStyleBind from './components/04_ClassAndStyleBind.vue'
import ConditionRender from './components/05_ConditionRender.vue'
import ListRender from './components/06_ListRender'
import FilterAndSortedList from './components/07_FilterAndSortedList'
import Event from './components/08_Event'
import FormInputBind from './components/09_FormInputBind'
import LifeCycle from './components/10_LifeCycle'
import TransitionAndAnimation from './components/11_TransitionAndAnimation'
import CustomizeFilter from './components/12_CustomizeFilter'
import Command from './components/13_Command'
import Plugin from './components/14_Plugin'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
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
    },
    {
      path: '/11_TransitionAndAnimation',
      name: 'TransitionAndAnimation',
      component: TransitionAndAnimation,
    },
    {
      path: '/12_CustomizeFilter',
      name: 'CustomizeFilter',
      component: CustomizeFilter,
    },
    {
      path: '/13_Command',
      name: 'Command',
      component: Command,
    },
    {
      path: '/14_Plugin',
      name: 'Plugin',
      component: Plugin,
    }
  ]
})
