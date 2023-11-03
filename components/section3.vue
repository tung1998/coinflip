<script setup lang="ts" >
const data = getDataByKey('block3')
</script>

<template>
  <section id="section3" class="relative w-full center-flex text-center">
    <div class="lg:max-w-195 my-20 relative z-1">
      <h1 class="font-black text-3xl lg:text-[50px]">
        {{ data.title }}
      </h1>
      <div class="center-flex">
        <h5 class="block max-w-145 my-10 text-[#898CA9]">
          {{ data.description }}
        </h5>
      </div>
      <div class="center-flex">
        <button class="btn btn-gradient py-4 px-8">
          {{ data.button }}
        </button>
      </div>
    </div>
    <img
      src="~assets/images/section3_bg1.png"
      class="absolute right-0 top-0 z-0"
    >
    <img
      src="~assets/images/section3_bg2.png"
      class="absolute right-10 z-1"
    >
  </section>
</template>
<style>
</style>
