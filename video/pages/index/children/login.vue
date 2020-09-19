<template>
	<div id="app">
		<p>{{title}}</p>
	</div>
</template>
<script>
	console.log("登录页")
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
	      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/login')
	    }
	  }
	}
</script>

<style>
</style>
