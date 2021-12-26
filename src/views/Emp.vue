<template lang="">
    <div class="card">
        {{res}}
    </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import store from "../store";
export default {
  setup() {
    const store = useStore();
    const res = store.dispatch("manager/loadEmp");
    console.log(res)
  },
};
</script>
<style lang="">
</style>