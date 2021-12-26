<template>
  <component :is="layout + '-layout'" v-if="layout"/>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
export default {
  setup() {
    const route = useRoute();

    return{
        layout: computed (() => route.meta.layout)
    }
  },
  components: {
    AuthLayout,
    MainLayout,
    MainLayout,
  },
};
</script>

<style>
</style>
