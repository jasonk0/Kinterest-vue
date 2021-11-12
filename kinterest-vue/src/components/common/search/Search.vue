<template>
	<div>
		<div class="search-warp">
			<div class="search-content">
				<img src="@/assets/icon/search.png" alt="清除" class="search-icon" />
				<form action="javascript:return true;" class="search-width-fill">
					<div>
						<input
							type="search"
							:placeholder="placeholder"
							@keyup.13="searchByKey($event)"
							class="search-input"
							ref="input"
							@input="change($event)"
						/>
					</div>
				</form>
				<div class="search-clear" @click="clear" v-if="isShow">
					<img src="@/assets/icon/clear.png" alt="清除" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Search",
	data() {
		return {
			isShow: false,
		};
	},
	props: {
		placeholder: {
			type: String,
			default: "搜索",
		},
	},
	methods: {
		change(e) {
			if (e.target.value) {
				this.isShow = true;
			} else {
				this.isShow = false;
			}
		},
		searchByKey(e) {
			this.$refs.input.blur();
			this.$emit("on-click", this.$refs.input.value); //将点击搜索的事件暴露给父组件
		},
		clear() {
			this.$refs.input.value = "";
			this.isShow = false;
		},
	},
};
</script>
<style scoped>
/* input[type="search"] {
	-webkit-appearance: none;
} */
input::-webkit-search-cancel-button {
	display: none;
}
.search-warp {
	margin: 0 4px 0 6px;
	height: 80px;
	line-height: 80px;
}
.search-input {
	background-color: #efefef;
	width: 100%;
	height: 49px;
	border: 2px solid gray;
	box-sizing: border-box;
	border-radius: 49px;
	padding: 10px 10px 10px 35px;
	margin: 10px 0;
	font-size: 14px;
}
.search-input:focus {
	background: #e1e1e1;
	border: px solid #7eb1ff;
}
.search-input::-webkit-input-placeholder {
	color: gray;
}
.search-content {
	position: relative;
	display: flex;
	align-items: center;
}
.search-icon {
	width: 15px;
	position: absolute;
	left: 10px;
}

.search-clear {
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 2px;

	height: 45px;
	width: 45px;
	border-radius: 50%;
	right: 2px;
	margin-top: 2px;
}
.search-clear:hover {
	background-color: #d4d4d4;
}
.search-clear:hover img {
	content: url(../../../assets/icon/clear-active.png);
}
.search-clear img {
	width: 24px;
	height: 24px;
}
.search-width-fill {
	width: 100%;
}
</style>