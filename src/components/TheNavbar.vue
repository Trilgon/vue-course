<template lang="">
    <nav class="navbar">
        <h3>Test project</h3>
        <ul class="navbar-menu">
             <li>
                <router-link to="/">Главная</router-link>
            </li>
            <li v-if="isManager">
                <router-link to="/emp">Сотрудники</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Выход</a>
            </li>
        </ul>
    </nav>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const position = store.getters["auth/position"];

    return {
      logout: () => {
        store.dispatch("auth/logout");
        router.push("/auth");
      },
      isManager: () => {
          return position == 'manager'
      }
    };
  },
};
</script>
<style lang="">
</style>