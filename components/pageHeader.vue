<script setup lang="ts" >

const headerMenu = ['header_menu_1', 'header_menu_2', 'header_menu_3', 'header_menu_4', 'header_menu_5'].map((item) => {
  return getDataByKey(item)
})

</script>

<template>
  <header
    class="relative w-full duration-500 z-1 py-3"
  >
    <div class="container">
      <div
        class="relative flex flex-wrap justify-between lg:justify-center items-center py-5 font-semibold"
      >
        <img
          class="lg:(absolute left-0)"
          src="https://a.storyblok.com/f/260556/110x16/b0a0800aae/logo.svg"
        >
        <div class="lg:(absolute right-0) flex gap-5">
          <button class="btn-outline">
            Sign in
          </button>
          <button class="btn btn-gradient">
            Sign up
          </button>
        </div>

        <div class="flex gap-3 py-5 md:gap-10 w-full justify-center">
          <nuxt-link
            v-for="(menuItem, index) in headerMenu"
            :key="index"
            class="text-sm "
            :to="menuItem.url"
          >
            {{ menuItem.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<style>
.hover-item {
  display: none
}

:hover > .hover-item {
  display: block
}
</style>
