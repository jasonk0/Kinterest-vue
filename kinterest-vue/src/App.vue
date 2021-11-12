<template >
	<div id="app">
		<div></div>
		<MainNavBar />
		<router-view class="content"></router-view>
	</div>
</template>
<script>
import MainNavBar from "components/content/main-navbar/MainNavBar.vue";
export default {
	components: { MainNavBar },
};
</script>





<style>
.content {
	padding-top: 80px;
}
body {
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica,
		ãƒ’ãƒ©ã‚®ãƒŽè§’ã‚´ Pro W3, Hiragino Kaku Gothic Pro, ãƒ¡ã‚¤ãƒªã‚ª, Meiryo,
		ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
		Segoe UI Symbol;
}
</style>
