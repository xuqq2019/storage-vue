<template>
	    <div id="app">
			<div class="test_one_box">
	        <video
			controls: true
			muted: true
			height="600px"
			width="800px"
			poster="http://192.168.0.222:8080/v1/picture/preview/1.jpg"
			src="http://192.168.0.222:8080/v1/video/preview/20200820movie.mp4"
	        >
	        </video>
			<video
			controls: true
			muted: true
			height="600px"
			width="800px"
			poster="../../static/picture/police.jpg"
			src="http://192.168.0.222:8080/v1/video/preview/20200820movie.mp4"
			>
			</video>
			</div>
			<div class="test_two_box">
			<video
			controls: true
			muted: true
			height="600px"
			width="800px"
			poster="../../static/picture/2.jpg"
			src="http://192.168.0.222:8080/v1/video/preview/20200820movie.mp4"
			>
			</video>
			<video
			controls: true
			muted: true
			height="600px"
			width="800px"
			poster="http://192.168.0.222:8080/v1/picture/preview/1.jpg"
			src="http://192.168.0.222:8080/v1/video/preview/20200820movie.mp4"
			>
			</video>
			</div>
	    </div>
</template>

<script>
	console.log("加载视频模块")
	/* eslint-disable */
	export default {
	name: "TestTwo",
	data() {
	    return {};
	},
	computed: {
		/* this.initVideo(); */
	    username() {
	      // 我们很快就会看到 `params` 是什么
		  console.log("当前路由地址"+this.$route.getCurrentLocation())
	      return this.$route.params.username
	    }
	},
	methods: {
	    goBack() {
	      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
	    }
	    /* initVideo() {
	    //初始化视频方法
	    let myPlayer = this.$video(myVideo, {
	        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
	        controls: "controls",
	        //自动播放属性,muted:静音播放
	        autoplay: "autoplay",
	        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
	        //preload: "auto",
	        //设置视频播放器的显示宽度（以像素为单位）
	        width: "1000px",
	        //设置视频播放器的显示高度（以像素为单位）
	        height: "600px"
	    });
	    } */
	}
	};
</script>

<style>
	#app {
		margin-left: 200rpx;
		margin-top: 50rpx;
	}
	.test_one_box {
		margin-left: 10rpx;
	}
	.test_two_box {
		margin-left: 10rpx;
	}
	/* .test_three_box {
		margin-left: 10rpx;
		margin-top: 20rpx;
	}
	.test_four_box {
		margin-left: 150rpx;
		margin-top: -120rpx;
	} */
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
