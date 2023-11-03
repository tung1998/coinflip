<script setup lang="ts" >
const data = getDataByKey('block1')
</script>

<template>
  <section class="relative w-full center-flex text-center">
    <div class="lg:max-w-195 lg:my-40 <lg:px-20">
      <h1 class="font-black text-3xl lg:text-[85px]">
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
  </section>
</template>
<style>
</style>
