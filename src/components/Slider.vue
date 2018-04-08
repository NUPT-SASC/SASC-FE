<template>
    <el-carousel :interval="3000" @change="changeHandle" class="sliders" :height="clientHeight" :autoplay="true">
      <el-carousel-item v-for="banner in banners" :key="banner.name" :style="banner.style">
         <div class="img-overlay"></div>
     </el-carousel-item>
            <div class=content>
              <transition name="fade-right">
                <h1 v-show="show">SASC</h1>
              </transition>
                <transition name="fade-left">
                  <h2 v-show="show">{{ nowTitle }}</h2>
              </transition>
            </div>
    </el-carousel>
</template>

<script>
/* eslint-disable global-require */
export default {
  data() {
    return {
      nowTitle: 'SASC', // 当前展示的内容
      show: false, // 是否展示标题和内容
      clientHeight: `${document.documentElement.clientHeight}px`,
      banners: [
        {
          name: '理学院科协',
          style: {
            backgroundImage: `url(${require('../assets/banners/all_new.jpeg')})`,
          },
        },
        {
          name: '电子部',
          style: {
            backgroundImage: `url(${require('../assets/banners/dianzibu.jpg')})`,
          },
        },
        {
          name: '计算机部',
          style: {
            backgroundImage: `url(${require('../assets/banners/jisuanjibu.jpg')})`,
          } },
        {
          name: '办公中心',
          style: {
            backgroundImage: `url(${require('../assets/banners/bangongzhongxin.jpg')})`,
          } },
      ],
    };
  },
  methods: {
    // 切换图片后，暂时隐藏标题和内容，一秒后再重新显示
    changeHandle(index) {
      this.show = false;
      const that = this;
      setTimeout(() => {
        this.nowTitle = this.banners[index].name;
        that.show = true;
      }, 1000);
    },
  },
  mounted() {
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this;
    window.onresize = function temp() {
      that.clientHeight = `${document.documentElement.clientHeight}px`;
    };
  },
};
</script>


<style lang="less" scoped>

.sliders{
  overflow: hidden;
  .content{
      z-index:5;
      color: white;
      position  : absolute;
      top       : 50%;
      left      : 50%;
      transform : translate(-50%,-50%);
      h1{
        font-size: 120px;
        font-weight: 800;
        margin: 0px;
        text-align: center;
      }
      h2{
        font-size: 60px;
        font-weight: 600;
        margin: 0px;        
        text-align: center;

      }
    }

  .el-carousel__item {
    /* Center and scale the image nicely */
    /* 优雅的图片居中自适应方案 */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow:hidden;
    .img-overlay {
      position: absolute;
      background: url(../assets/pattern.png) repeat, rgba(40, 41, 46, 0.25);
      width: 100%;
      height: 100%;
      /* z-index: 3; */
    }
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-right-enter-active {
  transition: all .5s ease;
}
.fade-right-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-right-enter, .fade-right-leave-to
/* .fade-right-leave-active for below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}

.fade-left-enter-active {
  transition: all .5s ease;
}
.fade-left-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-left-enter, .fade-left-leave-to
/* .fade-left-leave-active for below version 2.1.8 */ {
  transform: translateX(-40px);
  opacity: 0;
}

</style>