<template>
	<div class="lists">
		<div class="li-tilte wrapper">
			<div class="title-content">{{ lists.title }}</div>
		</div>
		<div class="list">
			<div class="list-box">
				<div class="list-item" v-for="desc in lists.listItem" :key="desc">
					<div class="wrapper list-content" @click="onEve(desc)">
						<div class="list-text">{{ desc }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ListItem",
	props: {
		lists: {
			title: "此Kin的灵感来源于你的近期动态",
			listItem: ["隐藏Kin图", "下载图片", "举报Pin图"],
		},
	},
	methods: {
		onEve(str) {
			return str;
		},
	},
};
</script>
<style scoped>
.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.lists-item {
	box-sizing: border-box;
	padding: 8px 0;
	margin-top: 8px;
}
.li-tilte {
	margin-top: 4px;
	padding: 8px;
	justify-content: center;
}
.title-content {
	font-size: 12px;
	font-weight: 400;
}
.list {
	margin-top: 4px;
}
.list-item {
	box-sizing: border-box;
	border-radius: 8px;
}
.list-item:hover {
	background-color: #efefef;
}
.list-content {
	cursor: pointer;
	border-radius: 8px;
	padding: 0 8px;
	min-height: 35px;
}
.list-text {
	text-align: left;
	font-weight: 700;
	font-size: 16px;
}
</style>