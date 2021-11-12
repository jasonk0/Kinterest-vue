<template>
	<div class="kin-details">
		<div class="kd-wrapper wrapper">
			<div class="kd-left">
				<div class="left-wrapper">
					<div class="kd-pic">
						<div class="pic-wrapper" v-images-loaded="imgLoaded">
							<img :src="imgUrl" alt="" />
						</div>
					</div>
					<div class="kd-modal">
						<div class="holder"></div>
						<div class="kd-bot-nav wrapper">
							<a href="">
								<div class="origin-link">
									<Button
										backColor="#fff"
										activeBackColor="#e2e2e2"
										activeFontColor="#111"
										><template #button-content>
											<div class="text">twitter.com</div>
										</template></Button
									>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="kd-right">
				<div class="right-wrapper wrapper">
					<div class="right-header-tab">
						<div class="tab-wrapper wrapper">
							<div class="tab-left wrapper">
								<Button
									backColor="#fff"
									activeBackColor="#fff"
									activeFontColor="#111"
									@bOnClick="moreClick"
									><template #button-content>
										<img src="@/assets/icon/more.png" alt="" /> </template
								></Button>
								<ListTag
									:isActive="moreIsActive"
									:showInPos="showInPos"
									:lists="lists[0]"
								/>

								<Button
									backColor="#fff"
									activeBackColor="#fff"
									activeFontColor="#111"
									@bOnClick="shareClick"
									><template #button-content>
										<img src="@/assets/icon/share.png" alt="" /> </template
								></Button>
								<ListTag
									:isActive="shareIsActive"
									:showInPos="showInPos"
									:lists="lists[1]"
								/>
							</div>
							<div class="tab-right wrapper">
								<Button
									backColor="#fff"
									hoverBackColor="#fff"
									activeBackColor="#fff"
									activeFontColor="#111"
									><template #button-content>
										<div class="txt">个人资料</div>
										<img
											src="@/assets/icon/down-black.png"
											alt="下拉菜单"
										/> </template
								></Button>
								<Button
									backColor="#fd0000"
									fontColor="#fff"
									hoverBackColor="#be0000"
									activeBackColor="#111"
									activeFontColor="#fff"
									@bOnClick="collectClick"
									><template #button-content>
										<div class="text" v-if="!isCollect">收藏</div>
										<div class="text" v-else>已收藏</div>
									</template></Button
								>
							</div>
						</div>
					</div>
					<div class="right-container">
						<div class="container-wrapper wrapper">
							<div class="container-title">
								<h1>这是一张好看的图片，我称他为Kin图</h1>
							</div>
							<div class="container-desc">
								<span
									>Artwork information: Dimensions: 50 cm width x 70 cm height
									Giclée print on Hahnemühle FineArt paper Hand-signed numbered
									edition Edition of 20 Signed Letter of Authenticity included
									Delivered in secured art-tubes Frames not included Currently
									only available for shipping in EU Expected delivery 14 days
									(delivery can take up to 5 weeks) About the artist:Simon
									Kämpfer is a German artist and 3D designer. Using bright
									colors and minimalist lines, his primary subjects consist of
									time, matter, and spatiality. Simons alluring aesthetics and
									subtle concepts result in a joyful yet calming visual mood,
									juxtaposing realistic elements with supernatural
									characteristics, while challenging preconceived notions of
									both time and space.</span
								>
							</div>
						</div>
					</div>
					<div class="right-footer">
						<div class="footer-wrapper"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import imagesLoaded from "vue-images-loaded";

import ListTag from "components/common/list-tag/ListTag";
import Button from "components/common/button/Button";
export default {
	name: "KinDetails",
	components: {
		Button,
		ListTag,
	},
	props: {},
	data() {
		return {
			moreIsActive: false,
			isCollect: false,
			shareIsActive: false,
			isActive: false,
			imgUrl: require("@/assets/images/-01.jpeg"),
			// kdHeight: 0,
			showInPos: {
				xPos: -61,
				yPos: 92,
			},
			lists: [
				{
					title: "",
					listItem: ["下载图片", "隐藏Kin图", "举报Kin图", "获取Kin图嵌入代码"],
				},
				{
					title: "发送此Kin图",
					listItem: [
						"一堆乱七八糟的一个朋友在哪开始读课文in",
						"发送",
						"举报Pin图",
					],
				},
			],
		};
	},
	/**
	 * F T => F
	 * T T => T
	 * T T => T
	 * F F => F
	 */

	methods: {
		imgLoaded() {
			this.kdInit();
		},
		kdInit() {
			let obj = this.$el.querySelector(".pic-wrapper");
			this.$el.querySelector(".kd-wrapper").style.height =
				obj.scrollHeight + "px";
			obj.style.paddingBottom = obj.scrollHeight / 5.08 + "%";
		},
		moreClick() {
			this.moreIsActive = !this.moreIsActive;
			if (this.shareIsActive) {
				this.shareIsActive = false;
			}
			this.isActive = this.moreIsActive || this.shareIsActive;
		},
		shareClick() {
			this.shareIsActive = !this.shareIsActive;
			if (this.moreIsActive) {
				this.moreIsActive = false;
			}
			this.isActive = this.moreIsActive || this.shareIsActive;
		},
		collectClick() {
			this.isCollect = !this.isCollect;
		},
	},
	directives: {
		imagesLoaded,
	},
};
</script>
<style scoped>
a,
a:link,
a:visited,
a:hover,
a:active {
	text-decoration: none;
	color: black;
}
.kin-details {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: relative;
}
.kd-wrapper {
	box-shadow: 0 0 8px rgba(0, 0, 255, 0.2);
	border-radius: 16px;
	height: 100%;
	position: relative;
	margin-top: 16px;
}
.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.kd-left {
	height: 100%;
}
.left-wrapper {
	position: relative;
	justify-content: center;
}
.kd-pic {
	border-radius: 16px 0 0 16px;
	overflow: hidden;
	width: 508px;
	min-height: 508px;
}
.pic-wrapper {
	position: relative;
	padding-bottom: 100%;
}
.pic-wrapper img {
	position: absolute;
	max-width: 100%;
	height: auto;
}
.kd-modal {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}
.holder {
	height: calc(100% - 60px);
}
.kd-bot-nav {
	display: none;

	position: sticky;
	bottom: 16px;
	height: 44px;
	/* background-color: #e7e7e7; */
}
.origin-link {
	margin-left: 10px;
}
.kd-modal:hover .kd-bot-nav {
	display: block;
}
.kd-right {
	position: relative;
	height: 100%;
	width: 100%;
}
.right-wrapper {
	position: relative;
	height: 100%;
	box-sizing: border-box;
	flex-direction: column;
	padding: 0 32px;
}
.right-header-tab {
	align-self: flex-start;
	position: sticky;
	top: 80px;
	padding-top: 32px;
	height: 60px;
	width: 444px;
	z-index: 2;
	background-color: hsl(0, 0%, 100%);
}
.tab-wrapper {
	height: 100%;
	width: 100%;
}
.tab-left {
	justify-content: flex-start;
}
.right-container {
	position: relative;
	box-sizing: border-box;
	/* height: 832px; */
	height: 100%;
	width: 444px;
}
.container-wrapper {
	margin-top: 32px;
	flex-direction: column;
	justify-content: flex-start;
	height: calc(100% - 32px);
	/* height: 800px; */

	width: 100%;
	/* background-color: #eee; */
	color: #111;
}
.container-desc {
	margin-top: 16px;
	font-size: 14px;
	text-align: left;
	word-wrap: break-word;
	font-weight: 400;
}
.right-footer {
	position: relative;
	bottom: 0;
	width: 444px;
	height: 92px;
}
.footer-wrapper {
	align-self: flex-end;
	margin-top: 40px;
	height: 32px;
	width: 100%;
	background-color: #eee;
}
.origin-link .text {
	font-size: 20px;
}
</style>