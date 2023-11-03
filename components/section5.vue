<script setup lang="ts" >
const data = getDataByKey('block5_content')
const coins = ['coin1', 'coin2', 'coin3', 'coin4', 'coin5'].map(item => getDataByKey(item))
</script>

<template>
  <section id="section5" class="relative w-full center-flex">
    <div class="container lg:my-10 relative z-1 text-center">
      <div class="lg:max-w-250 mx-auto">
        <h1 class="font-black text-3xl lg:text-[50px]">
          {{ data.title }}
        </h1>
        <div class="center-flex">
          <h5 class="block max-w-145 my-10 text-[#898CA9]">
            {{ data.description }}
          </h5>
        </div>
      </div>
      <div>
        <nuxt-link
          :to="data.url"
          class="text-[#B982FF] font-semibold center-flex gap-3"
        >
          <span>
            {{ data.button }}
          </span>
          <img class="inline-block" src="~assets/images/arrow.svg">
        </nuxt-link>
      </div>

      <table class="mt-10 w-full bg-[#1A1B23] rounded-xl font-bold">
        <tr v-for="coin in coins" :key="coin.name">
          <td class="w-2/10 text-left px-3">
            {{ coin.name }}
          </td>
          <td class="w-2/10 text-left text-[#B982FF]">
            {{ coin.short_name }}
          </td>
          <td class="text-right">
            {{ coin.price?.toLocaleString("en-US", {style:"currency", currency:"USD"}) }}
          </td>
          <td
            :class="{
              'text-green-500':coin.percent>0,
              'text-red-500':coin.percent<0}"
          >
            <span v-if="coin.percent>0">+</span>
            {{ coin.percent }}%
          </td>
          <td>
            <img class="inline-block" :src="coin.chart">
          </td>
          <td>
            <div class="center-flex gap-2">
              <span>
                Trade now
              </span>
              <img src="~/assets/images/arrow2.svg" alt="">
            </div>
          </td>
        </tr>
      </table>
    </div>

    <img
      src="~/assets/images/section6_bg2.png"
      class="absolute left-0 top-0"
    >
  </section>
</template>
<style>
</style>
