<template>
	<div>
		<div>这里是Kinterest的Home</div>
		<GLPhoto @more1Click="moreClick" />
		<ListTag :isActive="isActive" :showInPos="showInPos" :lists="lists" />
		<!-- <GLPhotoItem /> -->
	</div>
</template>
<script>
import GLPhoto from "components/content/grid-layout-photo/GLPhoto.vue";
import GLPhotoItem from "components/content/grid-layout-photo/GLPhotoItem.vue";
import ListTag from "components/common/list-tag/ListTag";
export default {
	components: { GLPhotoItem, GLPhoto, ListTag },
	data() {
		return {
			isActive: false,
			showInPos: {
				xPos: 0,
				yPos: 0,
			},
			lists: {
				title: "此Kin的灵感来源于你的近期动态",
				listItem: ["隐藏Kin图", "下载图片", "举报Pin图"],
			},
		};
	},
	methods: {
		moreClick(x, y) {
			// console.log(x, y);
			// ！！！此处不应该写死
			// 28 为more按钮距边框的距离
			// 86 为listtag的高度的二分之一
			this.isActive = !this.isActive;
			this.showInPos.xPos = x + 28;
			this.showInPos.yPos = y - 86;
		},
	},
};
</script>
<style>
</style>