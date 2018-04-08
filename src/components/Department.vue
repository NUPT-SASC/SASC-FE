<template>
<div style="background-color:white;padding-top:50px;padding-bottom:50px">
<div class="container">
<el-row>
  <el-col :sm="8" v-for="(department, index) in departments" :key="index"  style="padding: 20px;">
    <el-card :body-style="{ padding: '0px' }"  shadow="hover" >
      <img :src="department.url" class="image">
      <div style="padding: 14px;">
        <span>{{department.name}}</span>
        <div class="bottom clearfix">
        <p style="color:#909399;line-height:20px">
          {{department.desc}}
        </p>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</div>
</div>
</template>


<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>/* eslint-disable global-require */
export default {
  data() {
    return {
      departments: [
        {
          name: '电子部',
          url: require('../assets/banners/dianzibu-mini.jpg'),
          desc: '主要进行电子电路、模拟电子电路、单片机编程等等相关的技术的研究。部门日常授课为每周一次，对部员进行统一的单片机程序设计、电路焊接等等技术的培训。',
        },
        {
          name: '计算机部',
          url: require('../assets/banners/jisuanjibu-mini.jpg'),
          desc: '学习计算机语言（C、Python、Java等）以及不同的计算机系统的操作使用问题，涉及前端后端、ACM等，内容广泛，每周都有固定课时，都有专门讲师授课',
        },
        {
          name: '办公中心',
          url: require('../assets/banners/bangongzhongxin-mini.jpg'),
          desc: '负责通知、宣传、记录科协的大事件，制作科协宣传海报、视频、展板，完善科协内部建设，维持科协正常运转。同时也提供了PS、视频剪辑、PPT等多媒体软件的教学',
        },
      ],
    };
  },
};
</script>