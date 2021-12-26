<template lang="">
<div class="container with-nav">
    <the-navbar></the-navbar>
    <router-view></router-view>
</div>
</template>

<script>
import TheNavbar from "../components/TheNavbar";
export default {
    components: {
        TheNavbar
    }
};
</script>
<style lang="">
</style>
