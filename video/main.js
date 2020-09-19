import Vue from 'vue'
import App from './App'
import routers from './route.js'



//Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    el: "#app",
	router:routers,
	render: h => h(App)
})
app.$mount()


