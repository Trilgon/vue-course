<template lang="">
<form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', {invalid: lError}]">
        <label for="login">Логин</label>
        <input type="login" id="login" v-model="login" @blur="lBlur">
        <small v-if="lError">{{lError}}</small>
    </div>

    <div :class="['form-control', {invalid: pError}]">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="password" @blur="pBlur">
        <small v-if="pError">{{pError}}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting">Войти</button>
</form>
</template>

<script>
import {useLoginForm} from '../use/login-form'
export default {
  setup() {
    return {
        ...useLoginForm()
    }
  },
};
</script>

<style lang="">
</style>
