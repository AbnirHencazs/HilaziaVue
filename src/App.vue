<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import HilaziaIcon from '@/components/icons/HilaziaIcon.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <template v-slot:prepend>
        <hilazia-icon class="icon"></hilazia-icon>
      </template>
      <v-container>
        <v-row>
          <v-col cols="1">
            <RouterLink to="/">Home</RouterLink>
          </v-col>
          <v-col cols="1">
            <RouterLink to="/about">About</RouterLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer></v-footer>
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


.v-toolbar__content .v-toolbar__prepend .icon {
  width: 55px;
  height: 55px;
}
</style>
