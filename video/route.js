import Vue from 'vue'
import Router from 'vue-router'
// These can be imported from other files
import Video from './pages/index/video.vue'
import Login from './pages/index/children/login.vue'
import Home from './pages/index/children/home.vue'

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
Vue.use(Router)

const Bar = { template: '<div>bar is good</div>' }
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const routers = new Router({
	//mode: 'history',
	routes:[
	  {
	    path: '/',
		name: '首页',
	    component: Home
	  },
	  {
		    path: '/login',
			name: '登录',
		    component: Login
	  },
	  {
		    path: '/video',
			name: '视频',
		    component: Video
	  },
	  {
		    path: '/home',
			name: '首页',
		    component: Home
	  },
  { path: '/bar', component: Bar }
        /* {
            path: '/schools',
            name: 'schools',
            component: () => import('./views/schools/main.vue')
        },
        {
            path: '/main/:id',
            name: 'main',
            component: () => import('./views/report/main.vue'),
            redirect: '/main/:id/class',
            children: [
                {
                    path: '/main/:id/teacher',
                    name: 'teacherMain',
                    component: () => import('./views/teacher/main.vue'),
                },
                {
                    path: '/main/:id/teacher/:gradeId/:subjectId',
                    name: 'teacherMain',
                    component: () => import('./views/teacher/main.vue'),
                },
                {
                    path: '/main/:id/class',
                    name: 'classMain',
                    component: () => import('./views/class/main.vue'),
                },
            ]
        },
        {
            path: '**',          // 错误路由
            redirect: '/login'   //重定向
        } */
    ]
})




// 全局路由守卫
/* router.beforeEach((to, from, next) => {
    function getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return null;
    }

    // to: Route: 即将要进入的目标 路由对象
    // from: Route: 当前导航正要离开的路由
    // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

    //let isLogin = getCookie("localtoken") !== null;  // 是否登录

    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    if (!isLogin && to.name !== 'login') {
        router.push({ name: 'login' });
    }

    // 已登录状态；当路由到login时，跳转至home
    if (to.name === 'login') {
        if (isLogin) {
            router.push('/schools');
        }
    }

    next();
}); 
*/
export default routers;