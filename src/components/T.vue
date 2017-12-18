<template>
<div class="container">
<div id="banner"
  :style="{ transform: generateTransform,'box-shadow':generateShadow}"
  @mousemove="move($event)"
  @mouseleave="leave()"
>
</div>
</div>

</template>

<script>
export default {
  data() {
    return {
      angleX: 0,
      angleY: 0,
    };
  },
  methods: {
    move(e) {
      const halfWidth = e.target.scrollWidth / 2;
      const halfHeight = e.target.scrollHeight / 2;
  // 获取banner高度和宽度一半的值，也就是banner的中心x轴和中心y轴的相对于banner顶端和左端的偏移值
      const mouseX = e.pageX - e.target.offsetLeft;
      const mouseY = e.pageY - e.target.offsetTop;
  // 获取鼠标指针相对于banner的偏移值(用鼠标相对于页面的偏移值减去banner相对于页面的偏移值)
      const offsetX = halfWidth - mouseX;
      const offsetY = halfHeight - mouseY;
  // 计算鼠标相对于banner中心轴的偏移量
      const percentX = offsetX / halfWidth;
      const percentY = offsetY / halfHeight;
  // 计算偏移的百分比数(鼠标偏移量除以最大偏移量)
      this.angleX = percentY * 3;
      this.angleY = -percentX * 5;
  // 计算偏转角度并给data赋值(百分比数乘以最大偏转角度数，这里设为10度)
    },
    leave() {
      this.angleX = 0;
      this.angleY = 0;
    },
  },
  computed: {
    generateTransform() {
      return `perspective(3000px) rotateX(${this.angleX}deg) rotateY(${this.angleY}deg)`;
    },
    generateShadow() {
      return `${-this.angleY * 10}px ${this.angleX * 10}px 100px 0px rgba(0,0,0,0.5)`;
    },
    generateAnti() {
      return `translate(-${(50 - this.angleY) * 10}%,-${(50 - this.angleY) * 10}%)`;
    },
  },
};
</script>

<style lang="less">
#banner{
    // transition: all 0.3s linear;
    width: 100%;
    height: 400px;
    margin: 100px auto;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow:hidden;
    border: 1px solid silver;
    background-image: url('../assets/banners/jisuanjibu.jpg');


  .content{
      pointer-events: none;
      z-index:5;
      color: white;
      position  : absolute;
      top       : 50%;
      left      : 50%;
    //   transform : translate(-50%,-50%);
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
  }

</style>
