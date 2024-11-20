<template>
  <section class="bg-base-300 min-h-screen">
    <HeaderView />

    <div class="container px-6 m-auto pt-8">
      <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <!-- 主内容区域 -->
        <div class="col-span-4 lg:col-span-9 space-y-6">
          <!-- Banner 区域 -->
          <div class="relative w-full bg-base-100 rounded-lg shadow-lg p-6 flex flex-wrap gap-6">
            <!-- 左侧 动画图 -->
            <div class="relative flex-shrink-0 w-1/4 lg:w-1/5 ">
              <img
                src="https://cdn.aqdstatic.com:966/age/20240170.jpg"
                alt="movie poster"
                class="w-full h-auto rounded-lg shadow-lg"
              />
              <!-- 评分 -->
              <div
                class="absolute top-2 right-2 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.539 1.118l-3.978-2.89a1 1 0 00-1.175 0l-3.978 2.89c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.101c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z"
                  />
                </svg>
                8.9
              </div>
            </div>

            <!-- 右侧 内容 -->
            <div class="flex-1 space-y-4">
              <!-- 标题 -->
              <div>
                <h1 class="text-2xl font-bold">谋杀之谜：亡者的秘密</h1>
                <p class="text-sm text-gray-500">Murder Mystery of the Dead</p>
              </div>

              <!-- 动画信息 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 左侧信息 -->
                <div class="space-y-2">
                  <p class="text-sm"><span class="font-semibold">地区：</span>日本</p>
                  <p class="text-sm"><span class="font-semibold">动画种类：</span>TV</p>
                  <p class="text-sm"><span class="font-semibold">首播时间：</span>2024-11-13</p>
                  <p class="text-sm"><span class="font-semibold">播放状态：</span>连载</p>
                  <p class="text-sm"><span class="font-semibold">剧情类型：</span>悬疑 推理</p>
                </div>
                <!-- 右侧信息 -->
                <div class="space-y-2">
                  <p class="text-sm"><span class="font-semibold">原版名称：</span>マーダーミステリー・オブ・ザ・デッド</p>
                  <p class="text-sm"><span class="font-semibold">其他名称：</span>谋杀之谜：亡者的秘密</p>
                  <p class="text-sm"><span class="font-semibold">原作：</span>みかみてれん</p>
                  <p class="text-sm">
                    <span class="font-semibold">制作公司：</span>マーダーミステリー・オブ・ザ・デッド製作委員会
                  </p>
                </div>
              </div>

              <!-- 标签部分 -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="(tag, index) in tags"
                  :key="index"
                  class="px-3 py-1 bg-primary text-primary-content text-sm rounded-full shadow-md"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- 剧情简介 -->
          <div class="p-6 bg-base-100 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">剧情简介</h2>
            <p class="text-sm text-gray-700 leading-relaxed">
              这里是电影或动画的详细剧情介绍。内容较长时可以折叠显示。
            </p>
          </div>
        </div>

        <!-- 侧边栏 -->
        <div class="col-span-4 lg:col-span-3 space-y-6">
          <!-- 推荐内容 -->
          <div class="p-6 bg-base-100 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-4">推荐内容</h2>
            <div class="space-y-4">
              <div
                v-for="(item, index) in relatedItems"
                :key="index"
                class="flex space-x-4 items-center"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="related"
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="flex-1">
                  <h3 class="text-sm font-medium truncate">推荐内容标题</h3>
                  <p class="text-xs text-gray-500">类型 • 年份</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderView from '../views/HeaderView.vue';
const tags = ['悬疑', '推理'];
const relatedItems = Array(5).fill({});
</script>
