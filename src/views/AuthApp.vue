<template lang="">
    <h1>Auth</h1>
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="email" v-model="email" @blur="eBlur">
        <div :class="[{invalid: eError}]">
            <small v-if="eError">{{eError}}</small>
        </div>
        <input type="text" placeholder="password" v-model="password"  @blur="pBlur">
        <div :class="[{invalid: pError}]">
            <small v-if="pError">{{pError}}</small>
        </div>
        {{isSubmitting}}
        <button :disabled="isSubmitting">Enter</button>
    </form>
</template>
<script>

import { useLoginForm } from './../use/login-form.js';
export default {
    setup() {
        return {...useLoginForm()}
    }
}
</script>
<style>
.invalid {
    background-color: coral;
}
</style>