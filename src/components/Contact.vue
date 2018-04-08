<template>
<div class="container">
  <el-row>
    <el-col :md="12">
        <div class="amap-wrapper">
        <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom"  :scrollWheel="scrollWheel" :plugin="plugin" class="amap-demo">
            <el-amap-marker vid="component-marker" :visible="componentMarker.visible" :position="componentMarker.position" :content="componentMarker.content" ></el-amap-marker>
      </el-amap>
    </div>
    </el-col>
    <el-col :md="12" style="">
        <h3>联系我们</h3>
        <div>
            <ul>
            <li>南京邮电大学理学院大学生科学技术协会</li>
            <li>邮箱：contact@nupt.com</li>
            <li>网址：www.nuptsasc.com</li>
            <li>地址：南京邮电大学仙林校区教二501</li>
            <li>Github：github.com/NUPT-SASC</li>
            </ul>
        </div>
    </el-col>
</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      center: [118.930934, 32.107662],
      scrollWheel: false,
      zoom: 16,
      componentMarker: {
        position: [118.930934, 32.107662],
        // content: 'hello!',
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
      }],
    };
  },
};
</script>

<style lang='less' scoped>
@import url('../styles/common.less');
.amap-wrapper {
    padding: 10px;
    height: 200px;
}
</style>
