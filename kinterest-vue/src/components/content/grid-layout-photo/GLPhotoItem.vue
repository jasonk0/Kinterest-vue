<template>
	<div id="grid-item">
		<div class="item-wrapper">
			<div class="kin">
				<div class="kin-for-modal">
					<div
						class="kin-content"
						:style="{
							'--loading-height': loadingHeight + 'px',
							'--loading-bgc': loadingBgc,
						}"
					>
						<div class="kin-wrapper">
							<!-- <img :src="require('@/' + imgUrl)" alt="" /> -->
							<!-- <img :src="imgUrl" alt="" /> -->
							<img v-lazy="imgUrl" alt="" :key="imgUrl" />
						</div>
					</div>
					<div class="modal cursor">
						<div class="modal-bg opacity-1" @click="toKinDetails"></div>
						<div class="modal-content" @click.stop>
							<div class="modal-header">
								<div class="select-pop">
									<div class="select-wrapper">
										<div class="select-text">个人资料</div>
										<div class="select-icon">
											<img src="@/assets/icon/down.png" alt="下拉菜单" />
										</div>
									</div>
								</div>
								<div class="collect cursor">
									<div class="save cursor">收藏</div>
								</div>
							</div>

							<div
								class="modal-footer"
								:class="footerIsActive ? 'visible' : ''"
							>
								<div class="left">
									<div class="footer-button" v-if="originLink">
										<div class="origin-link">
											<a href="">{{ originLink }}</a>
										</div>
									</div>
								</div>
								<div class="right">
									<div class="footer-button">
										<div class="kin-share" @click="">
											<img src="@/assets/icon/share.png" alt="分享" />
										</div>
									</div>
									<div class="footer-button" @click="moreClick">
										<div class="kin-more">
											<img src="@/assets/icon/more.png" alt="更多" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="kin-footer">
					<div class="kin-desc" v-show="kinDesc">
						<div class="desc-wrap">
							<a :href="toKinDetails">
								<span>这是一个图片{{ kinDesc }}</span>
							</a>
						</div>
					</div>
					<div class="kin-author cursor" v-show="kinAuthor">
						jasonk0{{ kinAuthor }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "GLPhotoItem",
	props: {
		imgUrl: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			kid: "123",
			// toKinDetails: "/kin/:kid",
			// 加载时的高度和背景颜色，由父组件传过来
			// 将其设置为CSS变量，根据传值不同，展示效果不同
			loadingHeight: 520,
			loadingBgc: "red",
			originLink: "1",
			kinDesc: "1",
			kinAuthor: "1",
			footerIsActive: false,
		};
	},
	methods: {
		// 统一采用$router.replace()进行站内跳转，a标签需要的是完整链接
		toKinDetails() {
			this.$router.replace(`/kin/${this.kid}`);
		},
		moreClick(event) {
			this.footerIsActive = !this.footerIsActive;
			console.log(event);
			this.$emit("moreClick", event.pageX, event.pageY);
		},
	},
};
</script>
<style scoped>
.cursor {
	cursor: pointer;
}
.visible {
	visibility: visible;
}
a {
	display: block;
	text-decoration: none;
}
#grid-item {
	/* position: absolute; */
	box-sizing: border-box;
	width: 252px;
	/* position: relative; */
}
.item-wrapper {
	padding: 0 8px 16px 8px;
}
.kin {
	position: relative;
	border-radius: 16px;
}
.kin-for-modal {
	height: 100%;
	position: relative;
	overflow: hidden;
}
.kin-content {
	min-height: 236px;
	width: 236px;
}
.kin-wrapper {
	padding-bottom: 100%;
	position: relative;
	border-radius: 16px;
}
.kin-content img {
	position: absolute;
	height: auto;
	/* vertical-align: middle; */
	border-radius: 16px;
	max-width: 100%;
}
img[lazy="loading"] {
	background-color: var(--loading-bgc);
	height: var(--loading-height);
}
.kin-footer {
	position: relative;
	padding: 8px 6px 16px 6px;
}
.kin-desc {
	margin-bottom: 4px;
}
.desc-wrapper {
	display: flex;
	width: 224px;
	max-height: 34px;
}
.desc-wrapper span {
	flex: 1;
}
.kin-author {
	width: 224px;
	max-height: 32px;
}
.modal {
	visibility: hidden;
}

.modal-bg {
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	border-radius: 16px;
	background-color: #111;
	opacity: 0;
	transition: all 0.8s;
}
.kin:hover .modal {
	visibility: visible;
}
.kin:hover .modal-bg {
	opacity: 0.3;
}

.modal-header {
	position: absolute;
	display: flex;
	align-items: center;
	flex-direction: row;
	padding: 12px;
	left: 0;
	top: 0;
	right: 0;
}
.select-pop {
	width: 100%;
	flex: 1 1 auto;
	box-sizing: border-box;
	padding: 0 4px;
}
.select-text {
	text-align: left;
	font-size: 16px;
	font-weight: 500;
	color: #f0f0f0;
}
.select-icon {
	flex: 0 0 auto;
	/* margin-left: 4px; */
}
.select-icon img {
	width: 32px;
	height: 32px;
	vertical-align: middle;
}
.select-wrapper {
	height: 48px;
	display: flex;
	align-items: center;
	flex-direction: row;
}
.collect {
	flex: 0 0 auto;
	border-radius: 24px;
	min-width: 60px;
	min-height: 48px;
	box-sizing: border-box;
	margin-left: auto;
	background-color: #fd0000;
}
.collect:hover {
	background-color: #be0000;
}
.save {
	font-size: 16px;
	color: #f0f0f0;
	font-weight: 500;
	text-align: center;
	padding: 12px 16px;
}
.modal-footer {
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	align-items: center;
	flex-direction: row;
	box-sizing: border-box;
	padding: 12px;
}
.left {
	margin-left: 0px;
}
.left > .footer-button {
	border-radius: 24px;
}
a,
a:link,
a:visited,
a:hover,
a:active {
	text-decoration: none;
	color: black;
}

.right {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-right: 0px;
	margin-left: auto;
	flex: 0 0 auto;
}
.footer-button {
	/* position: absolute; */
	min-height: 32px;
	min-width: 32px;
	margin: 0 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: hsla(0, 0%, 100%, 0.8);
	z-index: 3;
}
.footer-button img {
	width: 16px;
	height: 16px;
}
.footer-button:hover {
	background-color: #f0f0f0;
}
</style>
  