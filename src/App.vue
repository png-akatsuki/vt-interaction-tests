<script setup lang="ts">
import "@brightly/brightlycomponents/dist/lit/br-app-nav/br-app-nav";
import ProfileCard from "./components/ProfileCard.vue";
const headerMenuConfig = {
    id: '1',
    route: '/',
    subMenu: {
      header: 'Test',
      children: [{
        id: '2',
        text: 'Test 2',
        callback: () => {},
      }],
      footer: [{
        id: '3',
        text: 'Test 3',
        callback: () => {},
      }],
    }
  }

const routes = {
    routes:[
        '/',
      ],
      nav: [
        {
          id: 7,
          name: 'da',
          icon: 'home',
          route: '/',
          children: []
        },
        {
          id: 6,
          name: 'sus',
          icon: 'clipboard',
          route: '',
          children: [
            {
              id: 10,
              name: 'di',
              route: '',
              children: [
                {
                  id: 11,
                  name: 'fa',
                  route: '/sustainability/functions-and-activities',
                  children: []
                },
              ]
            },
          ]
        }
      ],
      footerItems: [
        {
          id: 18,
          name: 'se',
          icon: 'gear',
          route: '',
          children: [
            {
              id: 19,
              name: 'mu',
              route: '/footer',
              children: []
            },
          ]
        }
      ]
      };
</script>

<template>
  <br-app-nav
    pageName="Visaul Test POC"
    :headerMenuConfig="headerMenuConfig"
    :activeRouteId="'1'"
    :user="{ isLoggedIn: true, userData: {name: 'Gautam Jha', avatar: 'https://i.ytimg.com/vi/VdddZIcyykM/maxresdefault.jpg'}}"
    :menuFooterEnabled="true"
    :routes="routes.nav"
  >
    <div slot="content">
      <profile-card></profile-card>
    </div>
  </br-app-nav>
</template>

<style scoped></style>
