<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import HilaziaIcon from '@/components/icons/HilaziaIcon.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <hilazia-icon class="icon"></hilazia-icon>
      </template>
      <v-container>
        <v-row>
          <v-col cols="sm-1">
            <RouterLink to="/">Home</RouterLink>
          </v-col>
          <v-col cols="sm-1">
            <RouterLink to="/about">About</RouterLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <app-footer />
  </v-app>
</template>

<style scoped>
a {
  color: rgb(var(--v-theme-primary-darken-1));
  text-decoration: none;
}
a.router-link-exact-active {
  font-weight: 700;
  text-decoration: underline;
}

.icon {
  width: 55px;
  height: 55px;
}
</style>
