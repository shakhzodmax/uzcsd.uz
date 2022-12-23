<script setup>
import {RouterView} from 'vue-router'
import NavbarItem from "./components/NavbarItem.vue";
import FooterItem from "./components/FooterItem.vue";
</script>

<template>
  <div class="wrapper h-screen flex flex-col">
    <div class="navbar basis-navbar">
      <NavbarItem />
      </div>

    <div class="content basis-full">
      <div class="mx-auto">
        <RouterView/>
      </div>
    </div>

    <div class="footer basis-footer bg-slate-600">
      <FooterItem/>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>