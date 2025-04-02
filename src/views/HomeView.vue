<script setup lang="ts"></script>

<template>
  <v-parallax class="rounded-b-16" src="http://hilazia.online/images/HilaziaHero.webp">
    <v-container class="fill-height flex-column align-start">
      <v-row class="align-end"
        ><h1 class="text-h1">Porque lo auténtico nunca pasa de moda.</h1></v-row
      >
      <v-row><v-btn color="primary">Shop</v-btn></v-row>
    </v-container>
  </v-parallax>
  <v-container>
    <v-row>
      <h1 class="text-h1">Explorar Por Categoria</h1>
    </v-row>
  </v-container>
  <v-container>
    <v-row class="h-25">
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Macrame</v-card>
      </v-col>
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Kombuchas</v-card>
      </v-col>
    </v-row>
    <v-row class="h-25">
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Corsets</v-card>
      </v-col>
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Vestidos</v-card>
      </v-col>
    </v-row>
    <v-row class="h-25">
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Plantas</v-card>
      </v-col>
      <v-col>
        <v-card class="px-2 py-8 text-center" rounded color="primary">Pantalones</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-h1 {
  color: rgb(var(--v-theme-primary-darken-1));
}
.v-parallax {
  border-radius: 0px 0px 62px 62px;
}
</style>
