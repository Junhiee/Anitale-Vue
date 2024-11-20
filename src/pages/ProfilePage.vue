<script setup>
import HeaderView from "../views/HeaderView.vue";
import { ref } from "vue";

// 定义初始值
const originalUsername = ref("koko");
const originalEmail = ref("daisuige68@gmail.com");
const originalAvatar = "/src/assets/avatar.jpg"; // 替换为实际头像的路径

// 数据绑定
const username = ref(originalUsername.value);
const email = ref(originalEmail.value);
const avatar = ref(originalAvatar);
const avatarPreview = ref(avatar.value);
const password = ref("");
const confirmPassword = ref("");
// 检查是否有更改的标志
const isChanged = ref(false);
const isUserChanged = ref(false);

// 修改头像功能
function selectFile() {
  const fileInput = this.$refs.fileInput;
  fileInput && fileInput.click();
}

function onFileChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function uploadAvatar() {
  avatar.value = avatarPreview.value;
  console.log("头像已保存");
}

// 用户名
function checkUserChanges() {
  isUserChanged.value = username.value !== originalUsername.value;
}
function saveUsername() {
  originalUsername.value = username.value; // 更新原始用户名
  isUserChanged.value = false; // 重置更改标志，使按钮消失
  console.log("邮箱已保存:", email.value);
}

// 邮件
// 检查是否与原始值不同
function checkChanges() {
  isChanged.value = email.value !== originalEmail.value;
}

// 保存邮箱并更新原始值
function saveEmail() {
  originalEmail.value = email.value; // 更新原始邮箱
  isChanged.value = false; // 重置更改标志，使按钮消失
  console.log("邮箱已保存:", email.value);
}

function savePassword() {
  console.log("密码已保存");
  password.value = "";
  confirmPassword.value = "";
}
</script>

<template>
  <section>
    <HeaderView />
    <div class="container px-6 m-auto">
      <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <!-- 左 -->
        <div
          class="col-span-4 lg:col-span-3 bg-base-300 rounded-xl max-h-[32rem]"
        ></div>
        <!-- 右 -->
        <div class="col-span-4 lg:col-span-9">
          <div class="flex flex-col space-y-8">
            <!-- 第一行：个人信息卡 -->
            <div class="p-6 rounded-xl shadow-lg bg-base-200">
              <div class="flex flex-col md:flex-row items-center space-x-6">
                <!-- 头像 -->
                <div class="avatar">
                  <div
                    class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2"
                  >
                    <img src="../assets/avatar.jpg" />
                  </div>
                </div>

                <!-- 名字和简介区域 -->
                <article class="prose prose-md">
                  <h3 class="text-xl font-semibold">koko</h3>
                  <!-- <p>daisuige68@gmail.com</p> -->
                  <p>
                    HelloGitHub 社区的第 14970 位用户，于 2024 年 04 月 03 日
                    加入 已分享 0 个开源项目，发布 0 份项目评价，共获得 0
                    点贡献值。
                  </p>
                </article>
              </div>
            </div>

            <!-- 第二行：功能选项 -->
            <div
              role="tablist"
              class="tabs tabs-sm md:tabs-lg tabs-lifted whitespace-nowrap bg-base-200"
            >
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="账户"
                checked="checked"
              />
              <div
                role="tabpanel"
                class="tab-content bg-base-200 border-base-300 rounded-box w-full min-h-screen"
              >
                <!-- 功能1: 账户设置 -->
                <div class="p-6 rounded-xl bg-base-200 space-y-8">
                  <!-- 头像设置 -->
                  <div class="flex flex-col space-y-4 items-start">
                    <label class="block text-lg font-medium">头像</label>
                    <!-- 文件选择按钮 -->
                    <label class="form-control w-full max-w-xs">
                      <input
                        type="file"
                        @change="onFileChange"
                        class="file-input file-input-bordered file-input-md w-full max-w-xs"
                      />
                      <button
                        v-if="avatarPreview !== avatar"
                        @click="uploadAvatar"
                        class="btn btn-primary mt-2"
                      >
                        保存头像
                      </button>
                    </label>

                    <!-- 头像预览 -->
                    <div class="avatar pl-2">
                      <div
                        class="ring-primary ring-offset-base-100 w-28 ring ring-offset-2"
                      >
                        <img :src="avatarPreview" class="object-cover" />
                      </div>
                    </div>
                  </div>

                  <!-- 用户名设置 -->
                  <div class="space-y-2">
                    <label class="block text-lg font-medium">用户名</label>
                    <input
                      type="text"
                      v-model="username"
                      @input="checkUserChanges"
                      class="input input-bordered w-full"
                      placeholder="请输入新用户名"
                    />
                    <p class="text-sm text-gray-500">
                      该用户名用于在网站上显示的名称。
                    </p>
                    <button
                      v-if="isUserChanged"
                      @click="saveUsername"
                      class="btn btn-primary mt-2"
                    >
                      保存更改
                    </button>
                  </div>

                  <!-- 邮箱设置 -->
                  <div class="space-y-2">
                    <label class="block text-lg font-medium">邮箱地址</label>
                    <input
                      type="email"
                      v-model="email"
                      @input="checkChanges"
                      class="input input-bordered w-full"
                      placeholder="请输入邮箱地址"
                    />
                    <p class="text-sm text-gray-500">
                      请确保使用有效邮箱地址，以接收重要通知。
                    </p>
                    <button
                      v-if="isChanged"
                      @click="saveEmail"
                      class="btn btn-primary mt-2"
                    >
                      保存更改
                    </button>
                  </div>

                  <!-- 修改密码 -->
                  <div class="flex flex-col space-y-2">
                    <label class="block text-lg font-medium">更改密码</label>
                    <input
                      type="password"
                      v-model="password"
                      class="input input-bordered w-full"
                      placeholder="请输入新密码"
                    />
                    <input
                      type="password"
                      v-model="confirmPassword"
                      class="input input-bordered w-full mt-2"
                      placeholder="确认新密码"
                    />
                    <p class="text-sm text-gray-500">密码长度至少为8位。</p>
                    <button
                      v-if="
                        password &&
                        confirmPassword &&
                        password === confirmPassword
                      "
                      @click="savePassword"
                      class="btn btn-primary mt-2"
                    >
                      保存更改
                    </button>
                  </div>
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="动画列表"
              />
              <div
                role="tabpanel"
                class="tab-content bg-base-200 border-base-300 rounded-box w-full min-h-[40rem]"
              >
                <div>
                  <div class="overflow-x-auto max-h-[40rem]">
                    <table class="table tables-lg table-pin-rows">
                      <!-- head -->
                      <thead>
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" class="checkbox" />
                            </label>
                          </th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        <tr>
                          <th>
                            <label>
                              <input type="checkbox" class="checkbox" />
                            </label>
                          </th>
                          <td>
                            <div class="flex items-center gap-3">
                              <div class="avatar">
                                <div class="rounded-md h-16 w-12">
                                  <img
                                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170732-PwCMhnnOKdBu.jpg"
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div class="font-bold">Hart Hagerty</div>
                                <div class="text-sm opacity-50">
                                  United States
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span class="badge badge-ghost badge-sm"
                              >Desktop Support Technician</span
                            >
                          </td>
                          <td>Purple</td>
                          <th>
                            <button class="btn btn-ghost btn-xs">
                              details
                            </button>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="收藏"
              />
              <div
                role="tabpanel"
                class="tab-content bg-base-200 border-base-300 rounded-box w-full h-64"
              >
                <div>Tab content 3</div>
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="数据统计"
              />
              <div
                role="tabpanel"
                class="tab-content bg-base-200 border-base-300 rounded-box w-full h-64"
              >
                Tab content 4
              </div>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                class="tab"
                aria-label="设置"
              />
              <div
                role="tabpanel"
                class="tab-content bg-base-200 border-base-300 rounded-box w-full h-64"
              >
                Tab content 5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
