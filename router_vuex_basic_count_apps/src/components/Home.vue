<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div class="page">
        <h1>This Is Home Page</h1>
        <p><strong>Count: {{ count }}</strong></p>
        <button @click="increment">increment</button>

        <router-link to="/about"> Go to About</router-link>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default{
    computed: mapState(['count']),
    methods: mapActions(['increment'])
}
</script>


