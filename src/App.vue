<template>
  <component :is="layout + '-layout'" v-if="layout"> </component>

  <h4>{{ layout }}</h4>

  <app-message></app-message>

</template>

<script>

import { useRoute } from "vue-router";
import { computed } from "vue";

import MainLayout from "./layout/MainLayout.vue";
import AuthLayout from "./layout/AuthLayout.vue";
import AppMessage from "./components/ui/AppMessage.vue";

export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  name: 'App',
  components: {
    MainLayout,
    AuthLayout,
    AppMessage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
