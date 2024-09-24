<script setup lang="ts">
import { ref } from "vue";
import ProfileCard from "./components/ProfileCard.vue";

// Sidebar collapsed state
const isCollapsed = ref(true);

// Function to expand/collapse the sidebar
function expand() {
  isCollapsed.value = false;
}

function toggle() {
  isCollapsed.value = !isCollapsed.value;
}

// Navigation menu items array
const menuItems = [
  { label: "Dashboard", icon: "fa-home", isActive: true },
  { label: "Products", icon: "fa-box", isActive: false },
  { label: "Contacts", icon: "fa-user-friends", isActive: false },
];

const extraItems = [
  { label: "Notifications", icon: "fa-bell", badge: 12 },
  { label: "Chat", icon: "fa-comments", badge: "99+", badgeType: "warn" },
  { label: "Settings", icon: "fa-sliders-h" },
];
</script>

<template>
  <div class="app">
    <div :class="['sidenav', { 'is-collapsed': isCollapsed }]">
      <header class="sidenav__header header">
        <span class="header__icon">
          <i class="fa fa-cube" aria-hidden="true"></i>
        </span>
        <span class="header__text">Application</span>
        <button class="sidenav__button" aria-label="Expand" @click="toggle">
          <span class="sidenav__button-icon">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </span>
        </button>
      </header>

      <section class="search">
        <label class="search__icon" for="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <span class="sr-only">Search</span>
        </label>
        <input
          id="search"
          type="text"
          class="search__input"
          placeholder="Search"
          @focus="expand"
        />
      </section>

      <nav class="sidenav__nav nav">
        <ul class="nav__list">
          <!-- Main Navigation Items -->
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            :class="['nav__item', { 'is-active': item.isActive }]"
          >
            <button class="nav__button">
              <span class="nav__icon">
                <i class="fa" :class="item.icon" aria-hidden="true"></i>
              </span>
              <span class="nav__label">{{ item.label }}</span>
            </button>
          </li>
        </ul>
        <div class="nav__divider"></div>
        <ul class="nav__list">
          <!-- Additional Items with badges -->
          <li
            v-for="(item, index) in extraItems"
            :key="index"
            class="nav__item"
          >
            <button class="nav__button">
              <span class="nav__icon">
                <i class="fa" :class="item.icon" aria-hidden="true"></i>
              </span>
              <span class="nav__label">{{ item.label }}</span>
            </button>
            <span
              v-if="item.badge"
              :class="['nav__badge', { warn: item.badgeType === 'warn' }]"
            >
              {{ item.badge }}
            </span>
          </li>
        </ul>
      </nav>

      <div class="sidenav__footer user">
        <button class="user__button">
          <div class="user__badge">
            <div class="user__image">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
          <div class="user__text">
            <span class="user__name">Tanea Joshi</span>
            <span class="user__title">Sr. Software Engineer</span>
          </div>
        </button>
      </div>
    </div>

    <div class="content">
      <ProfileCard />
    </div>
  </div>
</template>
