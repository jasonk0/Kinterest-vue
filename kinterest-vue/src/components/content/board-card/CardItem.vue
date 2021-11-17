<template>
	<div class="card-item" @click="boardClick">
		<div class="wrapper-for-modal" >
			<div class="card-content wrapper">
				<div class="left-img"><div :style="leftStyle"></div></slot></div>
				<div class="right-img wrapper">
					<div class="top-img"><div :style="topStyle"></div></div>
					<div class="bottom-img"><div :style="bottomStyle"></div></div>
				</div>
			</div>
			<div class="card-modal cursor">
				<div class="card-modal-bg"></div>
				<div class="edit-icon wrapper">
					<img
						width="16px"
						height="16px"
						src="@/assets/icon/pencil.png"
						alt="编辑按钮"
					/>
				</div>
			</div>
		</div>
		<div class="card-desc wrapper cursor">
			<div class="cd-content wrapper">
				<h2>{{ boards.title }}</h2>
				<div class="desc wrapper">
					<span class="nums">{{ boards.nums }} 张图片 </span
					><span class="last-open"> {{boards.lastOpend}}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "CardItem",
	props: {
		boards: {
			title: "",
			// url:[],
			url0: "",
			url1: "",
			url2: "",
			nums: 0,
			lastOpend: "",
		},
	},
	data() {
		return {
			path: "/:id/:name",
		};
	},
	computed: {
		leftStyle() {
			return !(this.boards.url0 === "")
				? {
						backgroundImage: `url(${this.boards.url0})`,
						backgroundPosition: "center center",
						backgroundRepeat: "no-peat",
						backgroundSize: "cover",
						minHeight: "100%",
						// backgroundColor: "rgb(239,239,239)",
				  }
				: {};
		},
		topStyle() {
			return !(this.boards.url1 === "")
				? {
						backgroundImage: `url(${this.boards.url1})`,
						backgroundPosition: "center center",
						backgroundRepeat: "no-peat",
						backgroundSize: "cover",
						minHeight: "100%",
						// backgroundColor: "rgb(239,239,239)",
				  }
				: {};
		},
		bottomStyle() {
			return !(this.boards.url2 === "")
				? {
						backgroundImage: `url(${this.boards.url2})`,
						backgroundPosition: "center center",
						backgroundRepeat: "no-peat",
						backgroundSize: "cover",
						minHeight: "100%",
						// backgroundColor: "rgb(239,239,239)",
				  }
				: {};
		},
	},
	methods: {
		boardClick() {
			this.$router.push(this.path);
		},
	},
};
</script>
<style scoped>
.cursor {
	cursor: pointer;
}
.card-item {
	overflow: hidden;
	padding: 8px;
	box-sizing: border-box;
	max-width: 252px;
}
.wrapper-for-modal {
	position: relative;
	border-radius: 16px;
	width: 236px;
	height: 157px;
	overflow: hidden;
}
.card-content {
	width: 100%;
	height: 100%;
}
.wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
}
.left-img {
	width: 157px;
	height: 157px;
	background-color: #efefef;
}
.right-img {
	flex-direction: column;
	height: 100%;
}
.top-img,
.bottom-img {
	position: relative;
	border-radius: 0;
	overflow: hidden;
	width: 78px;
	height: 78px;
	background-color: #efefef;
}
.card-modal {
	display: none;
}
.card-modal-bg {
	position: absolute;
	opacity: 0.1;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	border-radius: 16px;
	background-color: black;
}
.card-item:hover .card-modal {
	display: block;
}
.edit-icon {
	width: 32px;
	height: 32px;
	position: absolute;
	right: 0;
	bottom: 0;
	margin-right: 8px;
	margin-bottom: 8px;
	border-radius: 50%;
	background-color: #f0f0f0;
	justify-content: center;
}
.edit-icon:hover {
	background-color: #cccccc;
}
.card-desc {
	padding: 8px;
	box-sizing: border-box;
	align-items: flex-start;
}
.cd-content {
	flex-direction: column;
	align-items: flex-start;
}
.cd-content > h2 {
	font-size: 20px;
	font-weight: 700;
}
.desc {
	justify-content: flex-start;
	font-size: 12px;
}
.nums {
	margin-right: 4px;
}
</style>