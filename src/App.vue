<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import HilaziaIcon from '@/components/icons/HilaziaIcon.vue'
const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
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
    <v-footer class="text-center d-flex flex-column ga-2 py-4">
      <div class="d-flex ga-3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          color="primary"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div class="text-caption font-weight-regular opacity-60">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
        interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed
        massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi
        vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
        sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Hilazia</strong></div>
    </v-footer>
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
