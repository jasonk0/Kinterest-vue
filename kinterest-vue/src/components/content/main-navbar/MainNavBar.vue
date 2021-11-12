<template>
	<div class="main-nav-bar">
		<NavBar>
			<template #left>
				<NavBarItem path="/">
					<template #item-icon-active>
						<img src="@/assets/icon/pinterest.png" alt="logo" />
					</template>
					<template #item-icon>
						<img src="@/assets/icon/pinterest.png" alt="logo" />
					</template>
				</NavBarItem>
				<NavBarItem path="/" :activeBackColor="black" class="home-width">
					<template #item-text>
						<Button
							min-width="60px"
							height="49px"
							hoverBackColor="#f0f0f0"
							path="/"
							backColor="#fff"
							><template #button-content
								><div class="text">主页</div></template
							></Button
						>
					</template>
				</NavBarItem>
			</template>
			<template #center>
				<div><Search @on-click="queryByKey" ref="search" /></div>
			</template>

			<template #right>
				<NavBarItem path="/2">
					<template #item-icon-active>
						<img src="@/assets/icon/lingdang-active.png" alt="更新通知" />
					</template>
					<template #item-icon>
						<img src="@/assets/icon/lingdang.png" alt="更新通知" />
					</template>
				</NavBarItem>
				<NavBarItem path="/1">
					<template #item-icon-active>
						<img src="@/assets/icon/bg-chat-active.png" alt="聊天" />
					</template>
					<template #item-icon>
						<img src="@/assets/icon/bg-chat.png" alt="聊天" />
					</template>
				</NavBarItem>
				<NavBarItem path="/:id/profile">
					<template #item-icon-active>
						<img src="@/assets/icon/profile-active.png" alt="个人" />
					</template>
					<template #item-icon>
						<img src="@/assets/icon/profile.png" alt="个人" />
					</template>
				</NavBarItem>
			</template>
		</NavBar>
	</div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import NavBarItem from "components/common/navbar/NavBarItem";
import Search from "components/common/search/Search";
import Button from "components/common/button/Button";
export default {
	name: "MainNavBar",
	data() {
		return {
			black: "#111111",
		};
	},
	components: {
		Search,
		NavBar,
		NavBarItem,
		Button,
	},
	methods: {
		queryBykey() {},
	},
};
</script>
<style >
.main-nav-bar {
	position: relative;
	left: 0;
	top: 0;
	right: 0;
	z-index: 9999;
}

._item {
	border-radius: 49px;
}
.home-width {
	flex: 2;
}
.home-width .button-item {
	margin: 0;
}
.home-width > ._item {
	height: 49px;
	min-width: 64px;
	border-radius: 24px;
}
</style>