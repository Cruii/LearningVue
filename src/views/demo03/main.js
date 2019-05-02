import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入样式的另一种方式
import './css/base.css'

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#root');
