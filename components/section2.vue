<script setup lang="ts" >
const data = ['block2_content_1', 'block2_content_2', 'block2_content_3'].map((item) => {
  return getDataByKey(item)
})
</script>

<template>
  <section id="section2" class="container relative grid lg:grid-cols-3 gap-7 py-10 lg:py-40 z-2">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="rounded-xl bg-[#4A4B53] bg-opacity-30 py-7 px-10 text-center max-w-120 mx-auto relative z-1"
    >
      <div class="center-flex">
        <img :src="item.icon">
      </div>
      <div class="text-[32px] font-semibold mt-4">
        {{ item.title }}
      </div>
      <div class="text-[#898CA9] h-35 center-flex">
        {{ item.description }}
      </div>
      <nuxt-link
        :to="item.url"
        class="text-[#B982FF] font-semibold center-flex gap-3"
      >
        <span>
          {{ item.button }}
        </span>
        <img class="inline-block" src="~assets/images/arrow.svg">
      </nuxt-link>
    </div>
  </section>
</template>
<style>
#section2 {
  background-image: url('~/assets/images/section2_bg.png');
  background-repeat: no-repeat;
  background-position: 0% 80%;
}
</style>
