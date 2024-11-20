<script setup>
import { ref } from 'vue';
import CountdownComponent from '../components/CountdownComponent.vue';
import DividerView from './DividerView.vue';

const countries = ref(['China', 'USA', 'Japan', 'France']);
const tags = ref(['Adventure', 'Fantasy', 'Action', 'Romance']);
const types = ref(['TV Series', 'Movie', 'OVA', 'Special']);
const years = ref(['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);
const seasons = ref(['Winter', 'Spring', 'Summer', 'Fall']);
const sorts = ref(['Popular', 'New', 'Top Rated']);
const selectedTags = ref([]); // 用于存储已选择的标签

const toggleTag = (tag) => {
    const index = selectedTags.value.indexOf(tag);
    if (index > -1) {
        selectedTags.value.splice(index, 1);
    } else {
        selectedTags.value.push(tag);
    }
};

const getButtonClass = (tag) => {
    return {
        'btn btn-sm btn-outline btn-primary': !selectedTags.value.includes(tag), // 未选中样式
        'btn btn-sm btn-primary': selectedTags.value.includes(tag), // 选中样式
    };
};
</script>

<template>
    <div class="flex bg-base-300 w-full flex-col">
        <!-- <div class="card bg-base-300 rounded-none grid h-20 place-items-center">content</div> -->
        <div class="card bg-base-300">
            <div class="collapse collapse-arrow rounded-none bg-base-100">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium flex bg-base-300 justify-start">
                    TAGS
                </div>

                <div class="collapse-content bg-base-200 space-y-4">
                    <!-- 国家分类 -->
                    <div class="flex items-start gap-4 mt-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">国家</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(country, index) in countries" :key="index" :class="getButtonClass(country)"
                                @click="toggleTag(country)">
                                {{ country }}
                            </button>
                        </div>
                    </div>
                    <!-- Tag 分类 -->
                    <div class="flex items-start gap-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">Tag</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(tag, index) in tags" :key="index" :class="getButtonClass(tag)"
                                @click="toggleTag(tag)">
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                    <!-- 动画类型 -->
                    <div class="flex items-start gap-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">动画类型</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(type, index) in types" :key="index" :class="getButtonClass(type)"
                                @click="toggleTag(type)">
                                {{ type }}
                            </button>
                        </div>
                    </div>
                    <!-- 年份分类 -->
                    <div class="flex items-start gap-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">年份</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(year, index) in years" :key="index" :class="getButtonClass(year)"
                                @click="toggleTag(year)">
                                {{ year }}
                            </button>
                        </div>
                    </div>
                    <!-- 季节分类 -->
                    <div class="flex items-start gap-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">季节</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(season, index) in seasons" :key="index" :class="getButtonClass(season)"
                                @click="toggleTag(season)">
                                {{ season }}
                            </button>
                        </div>
                    </div>
                    <!-- 排序分类 -->
                    <div class="flex items-start gap-4">
                        <button class="btn btn-sm btn-primary fixed-width-button category-button">排序</button>
                        <div class="flex flex-wrap gap-2 flex-grow">
                            <button v-for="(sort, index) in sorts" :key="index" :class="getButtonClass(sort)"
                                @click="toggleTag(sort)">
                                {{ sort }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<style scoped>
.fixed-width-button {
    width: 100px;
    overflow: hidden;
    /* 不换行 */
    white-space: nowrap;
    /* 超出部分用省略号表示 */
    text-overflow: ellipsis;
}
</style>
