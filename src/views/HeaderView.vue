<script setup>
import ThemeComponent from "../components/ThemeComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import SearchComponent from "../components/SearchComponent.vue";
</script>

<template>
  <div class="navbar bg-base-200 shadow-md">
    <!-- 左下拉菜单 -->
    <div class="navbar-start">
      <!-- 主题切换 -->
      <ThemeComponent />
    </div>

    <!-- Logo 名称 -->
    <div class="navbar-center">
      <RouterLink to="/" class="btn btn-ghost text-xl">Anitale</RouterLink>
    </div>

    <div class="navbar-end">
      <!-- 搜索 -->

      <!-- <SearchComponent /> -->
      <button class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      <!-- 消息通知 + 下拉菜单 -->
      <div class="dropdown dropdown-hover dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </div>

        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
        >
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <!-- 用户组件 -->
      <div class="dropdown dropdown-hover dropdown-end px-2">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="../assets/avatar.jpg"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
        >
          <li>
            <RouterLink to="/profiles" class="justify-between">
              Profile
              <span class="badge">New</span>
            </RouterLink>
          </li>
          <li><RouterLink to="/settings">Settings</RouterLink></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
