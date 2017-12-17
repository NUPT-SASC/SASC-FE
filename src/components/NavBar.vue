<template>
<header :class="[(scrolled || !isHome)?'navbar-solid':'navbar']">
    <div class="container">
        <div class="home">
            <a href="//www.nuptsasc.com">
                <img src="../assets/logo.png" alt="Logo" style="height: 40px">
            </a>
        </div>
        <div class="menus">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  :router="true">
                <el-menu-item index="/">关于科协</el-menu-item>
                <el-menu-item index="/galley">科协图库</el-menu-item>
                <el-menu-item index="/news">通知新闻</el-menu-item>
                <el-menu-item index="/timeline">时间轴</el-menu-item>
                <el-menu-item index="/files">资源共享</el-menu-item>
                <el-menu-item index="/competition">比赛</el-menu-item>
            </el-menu>
        </div>
    </div>
</header>

  
</template>
<script>
  export default {
    props: ['isHome'], // 如果是主页的navbar，则添加透明滚动渐变效果
    data() {
      return {
        scrolled: false, // 是否有滚动
      };
    },
    computed: {
      activeIndex() {
        return `/${this.$route.path.split('/')[1]}`;
      },
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0; // 滚动事件的回调
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll); // 监听滚动事件
    },
};
</script>




<style lang="less" scoped>

.el-menu{
    background-color:rgba(0, 0, 0, 0);
    color:white;
    bottom: 0;
    border-bottom: none;
    .el-menu-item{
        height: 50px;
        line-height: 50px;
        transition: all 0.2s ease 0s;
        font-size: 14px;
        color:white;
        background-color: rgba(0, 0, 0, 0);
        &:hover{
            transition: all 0.3s ease 0s;
            border-bottom: 2px solid #409EFF !important;
        }
}
}


.navbar{
    padding-top: 30px;
    transition: all 0.3s ease 0s;
}
.navbar-solid {
    padding-top:5px;
    
    background-color: #000 !important;
    transition: all 0.2s ease 0s;
     
}

header{
    padding-top: 5px;
    height: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index:1000;
    .home{
        float: left;
    }
    .menus{
        float: right;
    }
}

</style>
