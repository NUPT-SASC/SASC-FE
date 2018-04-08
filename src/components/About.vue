<template>
<div class="container" style="padding-top:50px;padding-bottom:50px;">
  <el-row>
    <el-col :md="12">
        <h2>关于我们</h2>
        <p>南京邮电大学理学院科学技术协会（Science Association of Science College)，简称SASC，中文简称南邮理学院科协，成立于1999年。它是在南邮理学院分团委指导下，开展学生科技文化及学术研究的组织。成立以来，科协人不断进取，众多成员被知名企业聘用或顶尖高校录取。</p>
    </el-col>
    <el-col :md="12">
        <h2>我们一般做什么？</h2>
        <p>这里是我们科协最新的动态资讯和活动公告.</p>
        
            <!-- <li v-for="news in all_news">
            <a :href="news.url" >{{news.title}}</a>
            </li> -->
    </el-col>
</el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      all_news: [
        {
          title: '出大事了1',
          url: 'http://www.bing.com',
        },
        {
          title: '出大事了2',
          url: 'http://www.bing.com',
        },
        {
          title: '出大事了3',
          url: 'http://www.bing.com',
        },
        {
          title: '出大事了4',
          url: 'http://www.bing.com',
        },
      ],
    };
  },
  mounted() {
      // init all_news here
  },
};
</script>

<style lang='less'>
@import url('../styles/common.less');

.news{
    list-style-type : None;
    a{
        text-decoration:none;
        color: auto;
    }
}
</style>
