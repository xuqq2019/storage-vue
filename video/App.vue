<template>
	<div id="app">
		<h1>Hello App!</h1>
		  <p>
		    <!-- 使用 router-link 组件来导航. -->
		    <!-- 通过传入 `to` 属性指定链接. -->
		    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		    <router-link to="/bar">Go to Bar</router-link>
		  </p>
		  <!-- 路由出口 -->
		  <!-- 路由匹配到的组件将渲染在这里 -->
		  <router-view></router-view>
	</div>
</template>
<script>	
	export default {
	  computed: {
	    username() {
	      // 我们很快就会看到 `params` 是什么
		  //console.log("当前路由地址"+this.$route.getCurrentLocation())
	      return this.$route.params.username
	    }
	  },
	  methods: {
	    goBack() {
	      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/home')
	    }
	  }
	}
</script>

<style>
	/*每个页面公共css */
</style>
