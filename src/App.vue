<script setup>
import { RouterLink, RouterView } from "vue-router";
import Style from "./assets/css.vue";
</script>

<template>
  <div id="pag-estac">
    <sidebar>
      <h1>BodyWayAcademy</h1>

      <nav class="menu-left">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/teste">Teste</RouterLink>
      </nav>
    </sidebar>

    <section id="pag-dinam">
      <header>text</header>
      <RouterView />
    </section>
  </div>
</template>