//配置别名

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assests: "@/assets",
        components: "@/components",
        views: "@/views",
      },
    },
    // pwa: {
    //   iconPaths: {
    //     favicon32: "favicon.ico",
    //     favicon16: "favicon.ico",
    //     appleTouchIcon: "favicon.ico",
    //     maskIcon: "favicon.ico",
    //     msTileImage: "favicon.ico",
    //   },
    // },
  },
};
