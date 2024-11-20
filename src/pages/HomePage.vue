<script setup>
import { ref } from "vue";
import HeaderView from "../views/HeaderView.vue";

const titles = ref([
  "我推的孩子",
  "最狂辅助职业",
  "狼与香辛料 行商邂逅贤狼",
  "Re：从零开始的异世界生活 第三季",
  "胆大党",
  "Chainsaw Man",
  "Attack on Titan",
  "Demon Slayer: Kimetsu no Yaiba",
  "JUJUTSU KAISEN",
]);
const img_urls = ref([
  "https://cdn.aqdstatic.com:966/age/20230077.jpg",
  "https://cdn.aqdstatic.com:966/age/20240158.jpg",
  "https://cdn.aqdstatic.com:966/age/20240014.jpg",
  "https://cdn.aqdstatic.com:966/age/20240145.jpg",
  "https://cdn.aqdstatic.com:966/age/20240176.jpg",
  "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-74YTFlQzcFPg.png",
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg",
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
]);

const currentTab = ref(0); // 默认选中第一个标签

const tabs = [
  { name: "一", content: "Tab content 1" },
  { name: "二", content: "Tab content 2" },
  { name: "三", content: "Tab content 3" },
  { name: "四", content: "Tab content 4" },
  { name: "五", content: "Tab content 5" },
  { name: "六", content: "Tab content 6" },
  { name: "日", content: "Tab content 7" },
];

// 切换标签函数
function switchTab(index) {
  currentTab.value = index;
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation | 导航 -->
    <HeaderView />

    <!-- 上方固定区域 -->
    <div
      class="card bg-base-300 grid rounded-none h-20 place-items-center"
    ></div>

    <!-- 主内容区域，使用响应式设计 -->
    <div
      class="max-w-screen-xl w-full flex flex-col lg:flex-row lg:mt-12 lg:space-x-8 mx-auto"
    >
      <!-- 左边栏 -->
      <div class="basis-full lg:basis-8/12">
        <div class="box-content h-full w-full">
          <!-- Grid for Anime Titles -->
          <div class="flex flex-col space-y-4 items-end">
            <RouterLink to="/list" class="link link-hover mb-1"
              >流行趋势</RouterLink
            >
            <div class="grid grid-cols-3 gap-1 md:gap-4 md:grid-cols-5">
              <div
                v-for="(title, index) in titles"
                :key="index"
                class="bg-base-100 flex flex-col rounded-lg overflow-hidden w-full"
              >
                <div class="h-48 md:h-56 w-full">
                  <img
                    :src="img_urls[index]"
                    alt="anime"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <article class="prose prose-md text-left pt-2">
                  <p class="truncate">{{ title }}</p>
                </article>
              </div>
            </div>

            <div class="divider"></div>
            <a class="link link-hover mb-1">最近更新</a>
            <div class="grid grid-cols-3 gap-1 md:gap-4 md:grid-cols-5">
              <div
                v-for="(title, index) in titles"
                :key="index"
                class="bg-base-100 flex flex-col rounded-lg overflow-hidden w-full"
              >
                <div class="min-h-48 md:h-56 w-full">
                  <img
                    :src="img_urls[index]"
                    alt="anime"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <article class="prose prose-md text-left pt-2">
                  <p class="truncate">{{ title }}</p>
                </article>
              </div>
            </div>

            <div class="divider"></div>
            <a class="link link-hover mb-1">今日推荐</a>
            <div class="grid grid-cols-3 gap-1 md:gap-4 md:grid-cols-5">
              <div
                v-for="(title, index) in titles"
                :key="index"
                class="bg-base-100 flex flex-col rounded-lg overflow-hidden w-full"
              >
                <div class="h-48 md:h-56 w-full">
                  <img
                    :src="img_urls[index]"
                    alt="anime"
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <article class="prose prose-md text-left pt-2">
                  <p class="truncate">{{ title }}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右边栏 -->
      <div class="basis-full lg:basis-4/12 mt-4 lg:mt-0 ">
        <a class="link link-hover mb-1">Weekly</a>
        <div role="tablist" class="tabs tabs-lifted pt-4">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="一"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6 max-w-sm"
          >
            <div class="overflow-x-auto">
              <table class="table table-xs table-pin-rows table-pin-cols">
                <thead>
                  <tr>
                    <th></th>
                    <td>Name</td>
                    <td>Job</td>
                    <td>company</td>
                    <td>location</td>
                    <td>Last Login</td>
                    <td>Favorite Color</td>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>Canada</td>
                    <td>12/16/2020</td>
                    <td>Blue</td>
                    <th>1</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Zemlak, Daniel and Leannon</td>
                    <td>United States</td>
                    <td>12/5/2020</td>
                    <td>Purple</td>
                    <th>2</th>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Carroll Group</td>
                    <td>China</td>
                    <td>8/15/2020</td>
                    <td>Red</td>
                    <th>3</th>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Marjy Ferencz</td>
                    <td>Office Assistant I</td>
                    <td>Rowe-Schoen</td>
                    <td>Russia</td>
                    <td>3/25/2021</td>
                    <td>Crimson</td>
                    <th>4</th>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Yancy Tear</td>
                    <td>Community Outreach Specialist</td>
                    <td>Wyman-Ledner</td>
                    <td>Brazil</td>
                    <td>5/22/2020</td>
                    <td>Indigo</td>
                    <th>5</th>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Irma Vasilik</td>
                    <td>Editor</td>
                    <td>Wiza, Bins and Emard</td>
                    <td>Venezuela</td>
                    <td>12/8/2020</td>
                    <td>Purple</td>
                    <th>6</th>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Meghann Durtnal</td>
                    <td>Staff Accountant IV</td>
                    <td>Schuster-Schimmel</td>
                    <td>Philippines</td>
                    <td>2/17/2021</td>
                    <td>Yellow</td>
                    <th>7</th>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>Sammy Seston</td>
                    <td>Accountant I</td>
                    <td>O'Hara, Welch and Keebler</td>
                    <td>Indonesia</td>
                    <td>5/23/2020</td>
                    <td>Crimson</td>
                    <th>8</th>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td>Lesya Tinham</td>
                    <td>Safety Technician IV</td>
                    <td>Turner-Kuhlman</td>
                    <td>Philippines</td>
                    <td>2/21/2021</td>
                    <td>Maroon</td>
                    <th>9</th>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td>Zaneta Tewkesbury</td>
                    <td>VP Marketing</td>
                    <td>Sauer LLC</td>
                    <td>Chad</td>
                    <td>6/23/2020</td>
                    <td>Green</td>
                    <th>10</th>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td>Andy Tipple</td>
                    <td>Librarian</td>
                    <td>Hilpert Group</td>
                    <td>Poland</td>
                    <td>7/9/2020</td>
                    <td>Indigo</td>
                    <th>11</th>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td>Sophi Biles</td>
                    <td>Recruiting Manager</td>
                    <td>Gutmann Inc</td>
                    <td>Indonesia</td>
                    <td>2/12/2021</td>
                    <td>Maroon</td>
                    <th>12</th>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td>Florida Garces</td>
                    <td>Web Developer IV</td>
                    <td>Gaylord, Pacocha and Baumbach</td>
                    <td>Poland</td>
                    <td>5/31/2020</td>
                    <td>Purple</td>
                    <th>13</th>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td>Maribeth Popping</td>
                    <td>Analyst Programmer</td>
                    <td>Deckow-Pouros</td>
                    <td>Portugal</td>
                    <td>4/27/2021</td>
                    <td>Aquamarine</td>
                    <th>14</th>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td>Moritz Dryburgh</td>
                    <td>Dental Hygienist</td>
                    <td>Schiller, Cole and Hackett</td>
                    <td>Sri Lanka</td>
                    <td>8/8/2020</td>
                    <td>Crimson</td>
                    <th>15</th>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td>Reid Semiras</td>
                    <td>Teacher</td>
                    <td>Sporer, Sipes and Rogahn</td>
                    <td>Poland</td>
                    <td>7/30/2020</td>
                    <td>Green</td>
                    <th>16</th>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td>Alec Lethby</td>
                    <td>Teacher</td>
                    <td>Reichel, Glover and Hamill</td>
                    <td>China</td>
                    <td>2/28/2021</td>
                    <td>Khaki</td>
                    <th>17</th>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td>Aland Wilber</td>
                    <td>Quality Control Specialist</td>
                    <td>Kshlerin, Rogahn and Swaniawski</td>
                    <td>Czech Republic</td>
                    <td>9/29/2020</td>
                    <td>Purple</td>
                    <th>18</th>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td>Teddie Duerden</td>
                    <td>Staff Accountant III</td>
                    <td>Pouros, Ullrich and Windler</td>
                    <td>France</td>
                    <td>10/27/2020</td>
                    <td>Aquamarine</td>
                    <th>19</th>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td>Lorelei Blackstone</td>
                    <td>Data Coordinator</td>
                    <td>Witting, Kutch and Greenfelder</td>
                    <td>Kazakhstan</td>
                    <td>6/3/2020</td>
                    <td>Red</td>
                    <th>20</th>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <td>Name</td>
                    <td>Job</td>
                    <td>company</td>
                    <td>location</td>
                    <td>Last Login</td>
                    <td>Favorite Color</td>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="Tab 2"
            checked="checked"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab"
            aria-label="Tab 3"
          />
          <div
            role="tabpanel"
            class="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </div>

      <!-- 下边栏 -->
    </div>
  </div>
</template>

<style scoped></style>
