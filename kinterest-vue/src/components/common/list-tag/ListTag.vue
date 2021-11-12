<template>
	<div class="lt-box" :style="posStyle">
		<div class="lt-content wrapper">
			<div class="lt-item wrapper">
				<ListItem :lists="lists" />
			</div>
		</div>
	</div>
</template>
<script>
import ListItem from "./ListItem.vue";
export default {
	name: "ListTag",
	components: {
		ListItem,
	},
	props: {
		lists: {
			title: "此Kin的灵感来源于你的近期动态",
			listItem: ["隐藏Kin图", "下载图片", "举报Pin图"],
		},
		isActive: true,
		showInPos: {
			xPos: 0,
			yPos: 0,
		},
	},
	data() {
		return {
			// x: this.showInPos.xPos,
			// y: this.showInPos.yPos,
		};
	},
	computed: {
		posStyle() {
			return this.isActive
				? {
						visibility: "visible",
						left: `${this.showInPos.xPos}px`,
						top: `${this.showInPos.yPos}px`,
				  }
				: {};
		},
	},
};
</script>
<style scoped>
.lt-box {
	position: absolute;
	visibility: hidden;
	z-index: 1001;
	/* left: 500px;
	 top: 500px;
	 visibility: visible; */
}
.lt-content {
	/* position: relative; */
	box-sizing: border-box;
	box-shadow: 0 0 8px rgb(0 0 0 / 10%);
	border-radius: 16px;
	min-height: 40px;
	min-width: 180px;
	max-height: 90vh;
	max-width: 90vw;
	background-color: #fff;
	padding: 8px 0;
}
.wrapper {
	display: flex;
	flex-direction: column;
}
.lt-item {
	padding: 0 8px;
}
</style>