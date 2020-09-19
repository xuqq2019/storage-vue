<template>
		<div id="app">
			<h1>{{title}}</h1>
			<router-link to="/login">点击切换登录页</router-link>
			<button v-on:click="change1()">验证路由传参</button>
		</div>		
</template>
<script>
	console.log('初始化')
	export default {
		data() {
			return {
				title: 'Hello'
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
