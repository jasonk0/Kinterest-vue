<template>
	<div
		class="button-item"
		:style="{
			'--active-font-color': activeFontColor,
			'--active-back-color': activeBackColor,
			'--font-color': fontColor,
		}"
	>
		<button
			class="button-wrapper cursor"
			:style="bgcStyle"
			:class="activeClass"
			@mouseover="entry"
			@mouseout="leave"
			@click.stop="itemClick"
		>
			<div class="button-content wrapper">
				<slot name="button-content"> </slot>
			</div>
		</button>
	</div>
</template>

<script>
export default {
	name: "Button",
	props: {
		// 获取父元素的path，四个item的path都不同
		/**
		 * path 跳转路由
		 * backColor 按钮默认的背景颜色
		 * hoverBackColor 鼠标悬浮时的按钮背景颜色
		 * 	鼠标悬浮的状态切换通过绑定style属性，动态改变backgroundcolor进行切换
		 * activeBackColor 处于活跃状态时，按钮的背景颜色
		 * 	活跃状态的切换通过绑定class，动态添加删除active进行切换
		 * activeFontColor 处于活跃状态时，字体的背景颜色
		 * 	通过css变量的方式
		 * 		在:style中声明css变量‘--active-font-color’，值为js变量‘activeFontColor’
		 * 		activeFontColor由父组件传进来
		 * 		在.active类中使用css变量'var(--active-font-color)'设置活跃时的字体颜色，可根据js变量变化
		 */
		isActives: {
			type: Boolean,
			default: false,
		},

		path: {
			type: String,
			default: "",
		},
		fontColor: {
			type: String,
			default: "#11111",
		},
		backColor: {
			type: String,
			default: "#efefef",
		},
		hoverBackColor: {
			type: String,
			default: "#e2e2e2",
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
		return {
			isHover: false,
			isActived: false,
		};
	},
	mounted() {
		this.isActived = this.isActives;
	},
	computed: {
		// 计算属性的isActive用来标识当前活跃item
		// 从而使活跃item可以呈现被选中状态
		isActive() {
			return this.path == this.$route.path;
		},

		bgcStyle() {
			return !this.isHover
				? {
						backgroundColor: this.backColor,
				  }
				: {
						backgroundColor: this.hoverBackColor,
				  };
		},
		// 被选中状态item的css风格，可以通过在父组件添加activeFontColor和activeBackColor来动态改变风格
		activeClass() {
			return this.isActive || this.isActived ? " active" : "";
		},
	},
	methods: {
		// 设置鼠标悬停状态
		// 鼠标悬浮
		entry() {
			this.isHover = true;
		},
		// 鼠标离开
		leave() {
			this.isHover = false;
		},
		// 绑定点击跳转路由，大页面用replace比较好
		itemClick() {
			if (this.path) {
				this.$router.replace(this.path);
			} else {
				this.isActived = !this.isActived;
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
.button-item {
	margin-left: 4px;
	margin-right: 4px;
	box-sizing: border-box;
	color: var(--font-color);
}
.button-wrapper {
	box-sizing: border-box;
	min-width: 48px;
	min-height: 48px;
	padding: 12px;
	border-radius: 24px;
	border: 0;
	color: inherit;
}
.active {
	background-color: var(--active-back-color) !important;
	color: var(--active-font-color);
	fill: var(--active-font-color);
}

.button-item > button {
	border: 0;
	outline: none;
}
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}
.button-content {
	height: 24px;
	background-color: inherit;
	text-align: center;
	/* font-weight: 700; */
	font-size: 16px;
	font-weight: 600;
	color: inherit;
}
.button-content .text {
	padding: 0 4px;
}
.button-content img {
	padding: 0;
	width: 24px;
	height: 24px;
	/* vertical-align: text-top; */
}
.icon {
	fill: inherit;
}
</style>