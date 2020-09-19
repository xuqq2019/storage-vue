<template>
	<div id="app">
		<button type="buttoon" v-on:click="change1()">{{title}}</button>
		<!-- <router-link to="/video">点击切换页面A</router-link> -->
		<router-link to="/login">点击切换到登录页面</router-link>
		<br/>
		<router-link to="../../error/404.html">404页面</router-link>
	</div>
</template>
<script>
	console.log('页面初始化')
	export default {
		data() {
			return {
				title: '打开视频'
			}
		},
		onLoad() {
			//change2();
		},
		computed: {
		  username() {
		    // 我们很快就会看到 `params` 是什么
			//console.log("当前路由地址"+this.$route.getCurrentLocation())
		    return this.$route.params.username
		  }
		},
		methods: {
		  goBack() {
		    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
		  },
			//el 被新创建的 vm.$el 替换, 挂在成功
		change1 : function(){
			alert('mounted1');
			this.$router.push({  //核心语句
				   path:'/video',   //跳转的路径
				   query:{           //路由传参时push和query搭配使用 ，作用时传递参数
					  title:this.title , 
				   }
			})
		}
		}
	}
</script>

<style>
	
</style>
