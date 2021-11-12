<template >
	<div class="header">
		<div class="header-wrapper">
			<div class="header-content">
				<div class="first-wrapper"><slot name="first">一些文字-头像</slot></div>
				<div class="sencond-wrapper">
					<slot name="second">一些文字-名字</slot>
				</div>
				<div class="third-wrapper">
					<slot name="third">一些文字-用户名</slot>
				</div>
				<div class="forth-wrapper">
					<slot name="forth">一些文字-粉丝关注</slot>
				</div>
				<div class="fifth-wrapper"><slot name="fifth">一些文字-按钮</slot></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "Header",
};
</script>
<style >
.header {
	margin-bottom: 32px;
	display: flex;
	justify-content: center;
}
.header-wrapper {
	max-width: 488px;
	width: 100%;
	box-sizing: border-box;
	margin-top: 12px;
}
.header-content {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: -4px 0;
}
.first-wrapper,
.sencond-wrapper,
.third-wrapper,
.forth-wrapper,
.fifth-wrapper {
	margin: 4px 0;
}
</style>