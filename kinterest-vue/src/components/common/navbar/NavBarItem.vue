<template>
	<div class="navbar-item cursor">
		<div class="_item cursor" @click="itemClick">
			<div class="item-icon cursor">
				<div v-if="isActive"><slot name="item-icon-active"></slot></div>
				<div v-else><slot name="item-icon"></slot></div>
			</div>
			<div class="item-text-btn">
				<slot name="item-text"></slot>
			</div>
		</div>
	</div>
</template>

<script>
// 三个插槽管理三个元素，显示图标icon和名字
import Button from "components/common/button/Button";
export default {
	name: "NavBarItem",
	components: {
		Button,
	},
	props: {
		// 获取父元素的path，四个item的path都不同
		path: {
			type: String,
			default: "",
		},
		backColor: {
			type: String,
			default: "#fff",
		},
		hoverBackColor: {
			type: String,
			default: "#f0f0f0",
		},
		activeBackColor: {
			type: String,
			default: "black",
		},
		activeFontColor: {
			type: String,
			default: "white",
		},
	},
	data() {
		return {};
	},
	computed: {
		// 计算属性的isActive用来标识当前活跃item
		// 从而使活跃item可以呈现被选中状态
		isActive() {
			return this.path == this.$route.path;
		},
		// // 汇总不同状态下的style
		// dyStyle() {
		// 	return this.activeStyle && !this.isHover
		// 		? this.activeStyle
		// 		: this.hoverStyle;
		// },
		// // 被选中状态item的css风格，可以通过在父组件添加activeFontColor和activeBackColor来动态改变风格
		// activeStyle() {
		// 	return (this.isActive && this.activeBackColor) || this.isActives
		// 		? { color: this.activeFontColor, backgroundColor: this.activeBackColor }
		// 		: {};
		// },
		// // 鼠标悬浮时，背景颜色更改
		// hoverStyle() {
		// 	return this.isHover ? { backgroundColor: this.hoverBackColor } : {};
		// },
	},
	methods: {
		// 设置鼠标悬停状态
		// 鼠标悬浮
		// entry() {
		// 	this.isHover = true;
		// },
		// // 鼠标离开
		// leave() {
		// 	this.isHover = false;
		// },
		// // 绑定点击跳转路由，大页面用replace比较好
		itemClick() {
			if (this.path) {
				this.$router.push(this.path);
			} else {
				this.$emit("bOnClick");
			}
		},
	},
};
</script>

<style scoped>
.cursor {
	cursor: pointer;
}
.navbar-item {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	line-height: 80px;
	height: 80px;
	font-size: 15px;
	/* font-weight: 600; */
}
._item {
	overflow: hidden;
	display: flex;
	justify-content: center;
	height: 49px;
	width: 49px;
	white-space: nowrap;
}
._item:hover {
	background-color: #f0f0f0;
}

.item-icon {
	display: flex;
	align-items: center;
}
.item-icon > div {
	display: flex;
	align-items: center;
}
.item-icon img {
	width: 24px;
	height: 24px;
}
.item-text-btn {
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
</style>