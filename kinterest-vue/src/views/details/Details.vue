<template>
	<div class="details">
		这里是图片的详情页details
		<KinDetails> </KinDetails>
	</div>
</template>
<script>
import KinDetails from "components/content/kin-details/KinDetails";

export default {
	name: "Details",
	components: {
		KinDetails,
	},
};
</script>
<style scoped>
.details {
}
</style>