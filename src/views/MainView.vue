<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import ItemComponent from '../components/ItemComponent.vue';
</script>

<template>
    <main>
        <div class="container 
            grid grid-cols-2 gap-4 px-2 py-4 gap-y-8
            md:grid-cols-3 md:px-12 md:gap-y-12 md:py-12
            lg:grid-cols-5 lg:px-32 lg:gap-y-12 lg:py-12
            justify-items-center">

            <div class="box-border w-48 h-64 shadow-2xl bg-cover" v-for="i in 10" :key="i">
                <ItemComponent />
            </div>
        </div>
    </main>
</template>

<style scoped>
/* main {
    border: 2px solid red;
} */
</style>