<template>
	<div>
		这里是你的Board
		<Header>
			<template #second>
				<div class="name"><h1>美食</h1></div></template
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
		<BoardCard>
			<template #left>
				<div class="text">1 张 kin 图</div>
			</template>
			<template #board-card>
				<div>
					<GLPhoto />
				</div>
			</template>
		</BoardCard>
	</div>
</template>
<script>
import Button from "components/common/button/Button";
import Header from "components/content/header/Header";
import GLPhoto from "components/content/grid-layout-photo/GLPhoto";
import BoardCard from "components/content/board-card/BoardCard";
import CardItem from "components/content/board-card/CardItem";
export default {
	name: "CollectionBoard",
	components: {
		BoardCard,
		CardItem,
		GLPhoto,
		Header,
		Button,
	},
};
</script>
<style>
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