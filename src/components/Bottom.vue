<template>
    <div id="bottom">
        <div class="container">
            <el-row>
            <el-col :md="6" id="responsive-offset">-</el-col>
              <el-col :md="4">
                <div id="logo-wrapper">
                    <img src="../assets/logo_circle.png" alt="科协logo">
                </div>
              </el-col>
            <el-col :md="12" id="content">
                <p>© 2017 SASC</p>
                <p>南京邮电大学理学院科协 v2.0</p>
                 <p class="site-info">技术支持：<a href="https://github.com/nupt-sasc" title="南邮理学院科协计算机部" target="_blank">SASC计算机部</a>
                    &amp; <a href="https://github.com/gaoliang" title="但丁的蛋壳" target="_blank">但丁的蛋壳</a></p>
                  <p>审阅：盈袖</p>
                <p>Hosted by <a href="https://pages.coding.me" style="font-weight: bold">Coding Pages</a></p>        
            </el-col>
            </el-row>
        </div>
    </div>
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
#bottom {
  #responsive-offset {
    color: black;
  }
  width: 100%;
  background-color: black;
  .container {
    height: 100%;
    text-align: center;
    @media (min-width: 992px) {
        #logo-wrapper{
          text-align: right;
          padding-right: 20px;
        }
        #content{
          text-align: left;
          padding-left: 0px;
        }
      }
    p{
      margin: 2px;
    }
    img {
      filter: invert(1);
      height: 120px;
      width: 120px;
    }
  }
  #content {
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>


