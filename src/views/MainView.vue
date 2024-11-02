<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import ItemComponent from '../components/ItemComponent.vue';
</script>

<template>
    <main>
        <div class="contianer xl mx-auto">

            <!-- <ButtonComponent /> -->
            <div class="grid grid-cols-5 gap-8 mx-32 my-12 justify-items-center">
                <div v-for="i in 10">
                    <ItemComponent />
                </div>
            </div>
        </div>
    </main>

</template>

<style scoped></style>