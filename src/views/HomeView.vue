<script setup lang="ts">
import HilaziaIcon from '@/components/icons/HilaziaIcon.vue'
</script>

<template>
  <v-container class="fill-height flex-column">
    <v-row justify="center">
      <v-col>
        <h1 class="text-h1">Muy Pronto...</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-sheet>
          <hilazia-icon></hilazia-icon>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-h1">
          Explorar por categoria
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .text-h1 {
    color: rgb(var(--v-theme-primary-darken-1));
  }
</style>
