<script setup>
import { RouterLink, RouterView } from "vue-router";
import Style from "./assets/css.vue";

</script>

<template>
  <header>
    <div class="wrapper">
      <h1>BodyWayAcademy</h1>

      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/teste">Teste</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>