<script setup lang="ts" >
const data = useState<any>('data')
const menu1 = data.value.filter((item:any) => item.name.startsWith('menu1')).sort((item:any) => item.name).reverse().map((item:any) => item.content)
const menu2 = data.value.filter((item:any) => item.name.startsWith('menu2')).sort((item:any) => item.name).reverse().map((item:any) => item.content)
</script>

<template>
  <footer id="footer" class="relative w-full mt-20 <lg:text-center">
    <img src="~assets/images/footer_bg_circles.png" class="w-full absolute bottom-0 left-0 z-0">
    <img src="~assets/images/footer_bg.png" class="absolute bottom-0 left-0 z-0">
    <div class="container relative grid lg:grid-cols-11 z-1 text-sm font-light">
      <div class="lg:col-span-5 <lg:(mx-auto text-center my-10)">
        <img class="inline" src="https://a.storyblok.com/f/260556/110x16/b0a0800aae/logo.svg" alt="logo">
        <div class="my-10 font-light w-95 text-sm">
          {{ getDataByKey('footer_content')?.description }}
        </div>
        <div class="btn-border-gradient inline-flex w-min">
          <input
            type="text"
            class="bg-transparent px-3 h-14 w-60"
            placeholder="Enter your email"
          >
          <button class="btn !p-3.5">
            <img class="h-7 w-7" src="~assets/images/arrow2.svg">
          </button>
        </div>
      </div>
      <ul class="lg:col-span-3 my-5">
        <li v-for="(menuItem, index) in menu1" :key="index" class="py-3">
          <nuxt-link :to="menuItem.url">
            {{ menuItem.title }}
          </nuxt-link>
        </li>
      </ul>
      <ul class="lg:col-span-3 my-5">
        <li v-for="(menuItem, index) in menu2" :key="index" class="py-3">
          <nuxt-link :to="menuItem.url">
            {{ menuItem.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="container text-sm py-10 relative z-1">
      © 2021 GPD Holdings, LLC FinCEN MSB
    </div>
  </footer>
</template>
<style>
li:first-child {
  font-weight: bold;
}
</style>
