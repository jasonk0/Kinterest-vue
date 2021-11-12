<template>
	<div id="nav-bar" class="scroll">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center">给老子空出来</slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>
<script>
import NavBarItem from "./NavBarItem.vue";
export default {
	component: { NavBarItem },
};
</script>
<style>
* {
	padding: 0px;
	margin: 0px;
}
.left,
.right {
	display: flex;
}
.center {
	flex: 1;
}
#nav-bar {
	position: fixed;
	display: flex;
	height: 80px;
	line-height: 80px;
	left: 0px;
	right: 0px;
	top: 0px;
	background-color: #fff;
	text-align: center;
}
.scroll {
	box-shadow: 0px 3px 8px rgba(100, 100, 100, 0.15);
}
</style>