<template>
	<div class="board">
		<div class="board-tab">
			<div class="bt-left">
				<slot name="left">
					<Button
						:isActives="leftActive"
						backColor="#fff"
						activeFontColor="#fff"
						@bOnClick="sortListClick"
						><template #button-content>
							<svg
								class="icon"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								fill="#111111"
							>
								<path
									d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"
								/>
							</svg> </template
					></Button>
					<ListTag
						:isActive="leftActive"
						:showInPos="leftPos"
						:lists="listDesc[0]"
					/>
				</slot>
			</div>

			<div class="bt-right">
				<slot name="right">
					<Button
						backColor="#fff"
						activeFontColor="#fff"
						@bOnClick="addListClick"
						:isActives="rightActive"
						><template #button-content>
							<svg
								class="icon"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"
								/>
							</svg> </template
					></Button>
					<ListTag
						:isActive="rightActive"
						:showInPos="rightPos"
						:lists="listDesc[1]"
					/>
				</slot>
			</div>
		</div>
		<div class="board-card">
			<slot name="board-card">
				<div
					class="bd-grid-item"
					v-for="(items, index) in boardLists"
					:key="index"
				>
					<CardItem :boards="items"> </CardItem>
				</div>
			</slot>
		</div>
	</div>
</template>
<script>
import ListTag from "components/common/list-tag/ListTag";
import Button from "components/common/button/Button";
import CardItem from "components/content/board-card/CardItem";
export default {
	name: "BoardCard",
	props: {
		// boardLists: {
		// 	type: Array,
		// 	default: ["美图", "美食", "生活", "汽车", "二次元"],
		// },
	},
	components: {
		ListTag,
		CardItem,
		Button,
	},
	data() {
		return {
			leftPos: { xPos: 0, yPos: 50 },
			leftActive: false,
			rightPos: { xPos: -130, yPos: 50 },
			rightActive: false,
			boardLists: [
				{
					title: "美图",
					// url:[],
					url0: require("@/assets/images/06.jpeg"),
					url1: require("@/assets/images/03.jpeg"),
					url2: require("@/assets/images/09.jpeg"),
					nums: 5,
					lastOpend: "1 小时",
				},
				{
					title: "美食",
					// url:[],
					url0: require("@/assets/images/13.jpeg"),
					url1: require("@/assets/images/14.jpeg"),
					url2: require("@/assets/images/02.jpeg"),
					nums: 12,
					lastOpend: "1 小时",
				},
				{
					title: "生活",
					// url:[],
					url0: require("@/assets/images/04.jpeg"),
					url1: require("@/assets/images/12.jpeg"),
					url2: require("@/assets/images/08.jpeg"),
					nums: 3,
					lastOpend: "1 小时",
				},
				{
					title: "美食",
					// url:[],
					url0: require("@/assets/images/16.jpeg"),
					url1: require("@/assets/images/17.jpeg"),
					url2: require("@/assets/images/18.jpeg"),
					nums: 10,
					lastOpend: "1 小时",
				},
				{
					title: "未知",
					// url:[],
					url0: require("@/assets/images/21.jpeg"),
					url1: require("@/assets/images/19.jpeg"),
					url2: "",
					nums: 2,
					lastOpend: "1 小时",
				},
			],
			listDesc: [
				{
					title: "图板排序标准",
					listItem: ["A 到 Z", "拖放", "上一次收藏到"],
				},
				{
					title: "创建",
					listItem: ["Kin 图", "图板"],
				},
			],
		};
	},
	computed: {
		imgStyle() {
			return {
				backgroundImage: `url(${this.url})`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-peat",
				backgroundSize: "cover",
				minHeight: "100%",
				// backgroundColor: "rgb(239,239,239)",
			};
		},
	},
	methods: {
		tabClick() {},
		sortListClick() {
			this.leftActive = !this.leftActive;
			this.rightActive = false;
		},
		addListClick() {
			this.rightActive = !this.rightActive;
			this.leftActive = false;
		},
	},
};
</script>
<style>
.icon {
	color: #fff;
}
.board {
	display: flex;
	flex-direction: column;
	/* margin: -4px 0; */
}
.board-card {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	flex-direction: row;
}
.bd-grid-item {
	box-sizing: border-box;
	padding: 8px;
}
.board-tab {
	margin: 4px 0;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
}
.board-tab img {
	height: 24px;
	width: 24px;
	font-weight: 700;
}
.bt-left,
.bt-right {
	position: relative;
	box-sizing: border-box;
	height: 48px;
	width: 48px;
	border-radius: 50%;

	/* display: flex;
	justify-content: center;
	align-items: center; */
}
.bt-left,
.bt-right .text {
	font-size: 20px;
	font-weight: 500;
	width: auto !important;
}
/* .bt-left,
.bt-right .button-item {
	margin: 0px;
} */
/* .bt-left:hover,
.bt-right:hover {
	background-color: #f0f0f0;
} */
</style>