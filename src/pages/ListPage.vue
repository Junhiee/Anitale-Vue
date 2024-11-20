<script setup>
import HeaderView from '../views/HeaderView.vue';
import CollapseView from '../views/CollapseView.vue';
import MainView from '../views/MainView.vue';
import ItemComponent from '../components/ItemComponent.vue';
import DividerView from '../views/DividerView.vue';
import { ref } from 'vue';


const titles = ref([
    '我推的孩子',
    '最狂辅助职业',
    '狼与香辛料 行商邂逅贤狼',
    'Re：从零开始的异世界生活 第三季',
    '胆大党',
    'Chainsaw Man',
    'Attack on Titan',
    'Demon Slayer: Kimetsu no Yaiba',
    'JUJUTSU KAISEN'
])
const img_urls = ref([
    'https://cdn.aqdstatic.com:966/age/20230077.jpg',
    'https://cdn.aqdstatic.com:966/age/20240158.jpg',
    'https://cdn.aqdstatic.com:966/age/20240014.jpg',
    'https://cdn.aqdstatic.com:966/age/20240145.jpg',
    'https://cdn.aqdstatic.com:966/age/20240176.jpg',
    'https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-74YTFlQzcFPg.png',
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg',
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg',
    'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg'
])

</script>


<template>
    <HeaderView />
    <div class="min-h-screen flex flex-col mx-0 md:mx-60">
        <div class="box-content bg-base-200 grid rounded-none place-items-center">
            <CollapseView />
        </div>
        <!-- <DividerView /> -->
        <div class="box-content bg-base-200 grid rounded-none h-16 place-items-center my-8">Button</div>

        <!-- 卡片网格布局 -->
        <div class="grid gap-4 grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:gap-8">
            <div v-for="(title, index) in titles" :key="index"
                class="bg-base-100 flex flex-col rounded-lg overflow-hidden w-full">
                <div class="w-full">
                    <img :src="img_urls[index]" alt="anime" class="w-full h-48 md:h-80 md:min-h-80 md:max-h-80 object-cover object-center" />
                </div>
                <article class="prose prose-lg text-left pt-2"> 
                    <p class="truncate">{{ title }}</p>
                </article>
            </div>
        </div>


    </div>
</template>

<style scoped></style>