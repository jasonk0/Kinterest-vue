<!--
类似于pinterest的瀑布式布局dynamic grid layout 
-->
<template>
	<div class="container">
		<GLPhotoItem
			v-for="(item, index) in imgList"
			:key="index"
			:imgUrl="item"
			@moreClick="moreClick"
			@itemLoaded="reflow"
		>
		</GLPhotoItem>
	</div>
</template>
<script>
import imagesLoaded from "vue-images-loaded";
import GLPhotoItem from "./GLPhotoItem.vue";
export default {
	name: "GLPhoto",
	components: {
		GLPhotoItem,
	},
	data() {
		return {
			imgLists: [
				"assets/images/24.jpeg",
				"assets/images/25.jpeg",
				"assets/images/26.jpeg",
				"assets/images/01.jpeg",
				"assets/images/02.jpeg",
				"assets/images/03.jpeg",
				"assets/images/04.jpeg",
				"assets/images/05.jpeg",
				"assets/images/06.jpeg",
				"assets/images/07.jpeg",
				"assets/images/17.jpeg",
				"assets/images/18.jpeg",
				"assets/images/19.jpeg",
				"assets/images/20.jpeg",
				"assets/images/21.jpeg",
				"assets/images/22.jpeg",
				"assets/images/23.jpeg",
				"assets/images/08.jpeg",
				"assets/images/09.jpeg",
				"assets/images/10.jpeg",
				"assets/images/11.jpeg",
				"assets/images/12.jpeg",
				"assets/images/13.jpeg",
				"assets/images/14.jpeg",
				"assets/images/15.jpeg",
				"assets/images/16.jpeg",
			],
			imgList: [
				"https://i.pinimg.com/736x/b7/d6/f6/b7d6f6f24a78ac4564546b101bcf1d5e.jpg",
				"https://i.pinimg.com/736x/a6/82/5d/a6825d305dc14a76c8402833eb836867.jpg",
				"https://i.pinimg.com/736x/1a/00/2a/1a002a2e656bdadfacdca84d34e85044.jpg",
				"https://i.pinimg.com/736x/63/6a/26/636a2641f23c0b5d8ac4c970d550e1e7.jpg",
				"https://i.pinimg.com/736x/6e/82/27/6e822706a17d0d21bf46fba6529ae6fb.jpg",
				"https://i.pinimg.com/736x/c3/ce/73/c3ce7394394df216c63827dc09d62c83.jpg",
				"https://i.pinimg.com/736x/81/3f/e0/813fe03df80a31f93609e184131dae83.jpg",
				"https://i.pinimg.com/736x/bb/cc/ba/bbccba48ffa3ddb4a4338bf9aa9650ba.jpg",
				"https://i.pinimg.com/736x/13/6a/56/136a56af5d29620b60bc55dea28cf964.jpg",
				"https://i.pinimg.com/736x/25/02/3a/25023af94f851ab9c4690029c24f0847.jpg",
				"https://i.pinimg.com/736x/c1/2f/03/c12f03301d5eef1e48dfdec6018c3c64.jpg",
				"https://i.pinimg.com/736x/93/f5/fd/93f5fda921363e73fd373baf8ba6d98b.jpg",
				"https://i.pinimg.com/736x/8c/80/12/8c8012c31bb3265ae2ba43e28e821973.jpg",
				"https://i.pinimg.com/736x/c7/95/0e/c7950e9cf9212cda1a9635f2060ed90a.jpg",
				"https://i.pinimg.com/736x/14/ab/7c/14ab7ca506dcd5e013a03eaf17d765e4.jpg",
				"https://i.pinimg.com/736x/81/8c/46/818c46b538d5d618ee1242f2928db0c4.jpg",
				"https://i.pinimg.com/736x/23/c5/7e/23c57edecc001cab1611ccc6623a6dde.jpg",
				"https://i.pinimg.com/736x/ce/c8/95/cec895e2d6bc11f274f533f385158ca8.jpg",
			],
			imgListAll: [
				"https://i.pinimg.com/736x/b4/9b/8f/b49b8f52d1d91c4bf4d5adcb09075702.jpg",
				"https://i.pinimg.com/736x/3b/f1/91/3bf1917375b6ebd59930255228d7a9d0.jpg",
				"https://i.pinimg.com/736x/76/bd/c9/76bdc9b121abf86f5b4b6f9302670c88.jpg",
				"https://i.pinimg.com/736x/a9/5b/f0/a95bf04d68af34a98c94c3be0beed036.jpg",
				"https://i.pinimg.com/736x/79/7c/ea/797cea0e62e3f37454672a1985d9b0ad.jpg",
				"https://i.pinimg.com/736x/02/06/31/020631527d787a1a09718c9c1bcc66b0.jpg",
				"https://i.pinimg.com/736x/51/42/c7/5142c7760d60a6ced40c5fdbf1329d71.jpg",
				"https://i.pinimg.com/736x/90/55/bf/9055bf8050826aab0f8f7eb5289728d9.jpg",
				"https://i.pinimg.com/736x/e9/20/26/e92026e538189cb3bc7959241854c35b.jpg",
				"https://i.pinimg.com/736x/56/4a/8a/564a8a698f023bc50cedae008fea5604.jpg",
				"https://i.pinimg.com/736x/93/a8/d8/93a8d8dac7b99af0b6bcca37c83dbc6d.jpg",
				"https://i.pinimg.com/736x/ac/f0/fa/acf0fa88f068197c00b987a9e88c997e.jpg",
				"https://i.pinimg.com/736x/eb/20/27/eb2027011d6ccbb808ef04f2976dcba0.jpg",
				"https://i.pinimg.com/736x/16/ef/00/16ef00e1ec7f56db7e9ac17ad7a4d13e.jpg",
				"https://i.pinimg.com/736x/96/91/0c/96910c036597ee3ca7c8d6860520553d.jpg",
			],
			pages: 1,
			indexRow: 0,
			colCount: 0,
			kinWidth: 252,
			columnHeight: [],
			timer: null,
		};
	},
	mounted() {
		window.addEventListener("resize", this.reflows);
		// 监听图片懒加载，当懒加载完成即loaded，就更新页面
		this.$Lazyload.$on("loaded", this.reflows);
		window.addEventListener("scroll", this.getScroll, true);
	},
	destroyed() {
		window.removeEventListener("resize", this.reflows);
	},
	methods: {
		/**
		 * 业务部分
		 */
		moreClick(x, y) {
			this.$emit("more1Click", x, y);
		},
		/**
		 * 防抖包装
		 */
		reflows() {
			this.debounce(this.reflow, 100)();
		},
		// 下拉加载更多
		getScroll() {
			// console.log(e.target);
			let scrollTop = document.documentElement.scrollTop;
			let clientHeight = document.documentElement.clientHeight;
			if (scrollTop > this.columnHeight[4] - clientHeight) {
				this.imgList.push(...this.imgListAll);
				console.log("loadmore");
				// this.lastScrollTop = scrollTop;
				this.pages++;
			}
			// console.log(document.documentElement.clientHeight);
		},
		// 监听item就不用监听图片加载完成了
		// v-images-loaded="imgLoaded"
		// 监听 图片item组件加载完成
		imgLoaded() {
			this.reflows();
		},

		reflow() {
			// console.log("imgload");
			// 获取屏幕宽度
			const maxW = document.documentElement.clientWidth;
			// 计算一行可以放下几个kin-item，具有几个column
			const count = this.getColumnCount(maxW);
			this.colCount = count;
			// 计算 总共有几个row，有几行
			// 初始化 columnHeight
			for (let i = 0; i < count; i++) {
				this.columnHeight[i] = 0;
			}
			// 按序排列第一行

			this.$children.forEach((child, i) => {
				// 每行的图片索引，即当前列（0-count）
				let index = 0;
				index = i % count;
				// 如果index=0则意味着换行，将记录indexRow加1
				if (index) {
					this.indexRow++;
				}
				// 设置第一行的translate
				// 根据column的高度进行第二行排序
				// 设置第二行的translate
				this.setImgStyle(child);
				this.setTranslate(
					child.$el.style,
					index * this.kinWidth,
					this.columnHeight[index]
				);
				// 记录column的高度（整个item-kin的高度）
				this.columnHeight[index] += child.$el.offsetHeight;
			});
			this.setContainerSytle();
		},
		// 设置大容器的宽度和高度
		setContainerSytle() {
			let h = this.columnHeight.reduce((num1, num2) => {
				return num1 > num2 ? num1 : num2;
			});

			let w = this.colCount * this.kinWidth;
			// < 1920
			// 	? this.colCount * this.kinWidth
			// 	: 1920;
			this.$el.style.height = `${h}px`;
			this.$el.style.width = `${w}px`;
		},
		// 计算一行可以放下几个kin-item，具有几个column
		getColumnCount(maxW) {
			// 安全宽度，最多只有6列
			return parseInt(maxW / this.kinWidth) > 6
				? 6
				: parseInt(maxW / this.kinWidth);
		},
		// 设置item-kin的transform
		setTranslate(obj, x, y) {
			obj.position = "absolute";
			obj.left = 0 + "px";
			obj.top = 0 + "px";
			obj.transform = `translateX(${x}px) translateY(${y}px)`;
		},
		// 设置图片属性，高度、色块
		setImgStyle(obj) {
			// ！！！！后期需要修改，接口数据直接拿到图片的高度进行设置
			// 精准获取图片的高度
			let h = obj.$el.querySelectorAll(".kin-wrapper img")[0].height;

			// console.log(h);

			// 设置padding-bottom
			obj.$el.querySelectorAll(".kin-wrapper")[0].style.paddingBottom =
				h / 2.36 + "%";
			// ！！！！设置背景颜色
			// });
		},
		// 防抖动函数
		debounce(func, delay) {
			let that = this;
			return function (...args) {
				if (that.timer) {
					clearTimeout(that.timer);
				}
				that.timer = setTimeout(() => {
					func.apply(that, args);
				}, delay);
			};
		},
	},
	directives: {
		imagesLoaded,
	},
};
</script>
<style>
.container {
	position: relative;
	margin: 0 auto;

	/* flex布局
	display: -ms-flexbox;
	-ms-flex-direction: row;
	-ms-flex-wrap: wrap;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center; */
}
</style>