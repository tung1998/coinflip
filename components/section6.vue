<script setup lang="ts" >
const data = getDataByKey('block6')
</script>

<template>
  <section id="section3" class="relative w-full center-flex z-1">
    <div class="container lg:max-w-195 my-20 lg:px-20 relative z-1 pr-0 <lg:(text-center)">
      <h1 class="font-black text-3xl lg:text-[50px]">
        {{ data.title }}
      </h1>
      <div>
        <h5 class="block max-w-145 my-10 text-[#898CA9]">
          {{ data.description }}
        </h5>
      </div>
      <div>
        <button class="btn btn-gradient py-4 px-8">
          {{ data.button }}
        </button>
      </div>
    </div>
    <img
      src="~assets/images/section6_bg.png"
      class="-my-40 -ml-20 relative z-2 <lg:hidden"
    >
  </section>
</template>
<style>
</style>
