<template>
	<div>
		<div>这里是Kinterest的个人空间profile</div>
		<ProfileHeader />
		<BoardCard />
	</div>
</template>
<script>
import BoardCard from "components/content/board-card/BoardCard";
import ProfileHeader from "./child-components/ProfileHeader.vue";
export default {
	components: {
		ProfileHeader,
		BoardCard,
	},
};
</script>
<style>
</style>