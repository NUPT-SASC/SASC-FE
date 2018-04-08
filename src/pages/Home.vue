<template>
<div>
  <Slider/>
  <About/>
  <!-- <T/> -->
  <Department/>
  <Contact/>
</div>
</template>
<script>
import Slider from '@/components/Slider';
import About from '@/components/About';
import T from '@/components/T';
import Contact from '@/components/Contact';
import Department from '@/components/Department';

export default {
  components: { Slider, T, Contact, Department, About },
};
</script>


<style lang="less">
</style>
