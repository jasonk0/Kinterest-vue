<template>
	<div class="profile-header">
		<Header>
			<template #first>
				<div class="picture">
					<div class="svg wrapper">
						<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%">
							<title>jasonk0111</title>
							<text
								font-size="40px"
								x="60"
								y="60"
								fill="#111"
								dy="0.35em"
								text-anchor="middle"
								font-weight="700"
							>
								J
							</text>
						</svg>
					</div>
				</div>
			</template>
			<template #second>
				<div class="name"><h1>Jasonk</h1></div></template
			>
			<template #third>
				<div><span>@jasonk0111</span></div>
			</template>
			<template #forth>
				<div class="wrapper">
					<div class="fans"><span>1 位粉丝</span></div>
					<span class="dot">·</span>
					<div class="follows"><span>1 关注</span></div>
				</div></template
			>
			<template #fifth>
				<div class="button">
					<div class="wrapper">
						<Button
							><template #button-content>
								<div class="text">分享</div></template
							></Button
						>
						<Button>
							<template #button-content>
								<div class="text">编辑个人资料</div>
							</template>
						</Button>
					</div>
				</div>
			</template>
		</Header>
	</div>
</template>
<script>
import Button from "components/common/button/Button";
import Header from "components/content/header/Header";
export default {
	components: {
		Button,
		Header,
	},
};
</script>
<style scoped>
.profile-header div {
	text-align: center;
}
.picture {
	position: relative;
	padding-bottom: 100%;
	border-radius: 50%;
	background-color: #efefef;
	width: 120px;
}
.svg {
	position: absolute;
}
.wrapper {
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: row;
}
text {
	display: block;
	white-space: nowrap;
}
.name {
	display: flex;
}
.name h1 {
	text-align: center;
	word-wrap: break-word;
	font-weight: 700;
}
.dot {
	font-size: 14px;
	padding: 2px 4px 0px 4px;
	font-weight: 400;
	text-align: left;
	word-wrap: break-word;
}
.fans,
.follows {
	font-weight: 700;
	text-align: left;
}
</style>