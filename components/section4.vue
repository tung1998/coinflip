<script setup lang="ts" >
const data = getDataByKey('block4')
</script>

<template>
  <section id="section4" class="relative w-full center-flex <lg:text-center">
    <img
      src="~assets/images/section4_bg.png"
      class="-my-40 w-1/2 <lg:hidden"
    >
    <div class="container lg:max-w-195 my-20 lg:px-20 relative z-1 pl-0">
      <h1 class="font-black text-3xl lg:text-[50px]">
        {{ data.title }}
      </h1>
      <div class="center-flex">
        <h5 class="block max-w-145 my-10 text-[#898CA9]">
          {{ data.description }}
        </h5>
      </div>
      <div>
        <button class="btn btn-outline py-4 px-8">
          {{ data.button }}
        </button>
      </div>
    </div>
  </section>
</template>
<style>
</style>
