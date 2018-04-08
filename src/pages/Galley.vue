<template>
<div class="img-container">
    <viewer :images="imgs">
      <img  v-for="img in imgs" :src="`https://xieranmaya.github.io/images/cats/${img.url}`">
    </viewer>
    </div> 

</template>

<script>
export default {
  data() {
    return {
      imgs: [],
    };
  },
  mounted() {
    this.axios.get('https://xieranmaya.github.io/images/cats/cats.json').then((response) => {
      this.imgs = response.data;
    });
  },
};
</script>


<style lang='less'>
@import url('../styles/common.less');


div.img-container > div{
  padding-top: 60px;
  display: flex;
  flex-wrap: wrap;
  img{
    height: 200px;
    flex-grow: 1;
    object-fit: cover;
    margin: 2px;
    &:hover{
      transform: scale(1.1); 
      cursor:pointer;
				box-shadow: 0 0 50px 5px #333;
      transition: all 0.25s ease 0s;
    }
}
}

</style>
