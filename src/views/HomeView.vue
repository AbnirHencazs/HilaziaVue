<script setup lang="ts"></script>

<template>
  <v-parallax class="rounded-b-16 mb-8" src="https://hilazia.online/images/HilaziaHero.webp">
    <v-container class="fill-height flex-column align-start">
      <v-row class="align-end">
        <h1 class="text-h1 gradient-text">Arte que se siente, que se viste y que se prueba</h1>
      </v-row>
    </v-container>
  </v-parallax>
  <v-container>
    <v-row>
      <h2 class="text-h2 text-primary">Explorar Por Categoria</h2>
    </v-row>
  </v-container>
  <v-container>
    <v-carousel
      cycle
      height="300"
      hide-delimiter-background
      show-arrows="hover"
      delimiter-icon="mdi-circle"
    >
      <v-carousel-item>
        <v-row class="fill-height align-center">
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-zoom-effect card-uniform"
              rounded
              image="https://hilazia.online/images/MacrameCard.jpg"
              title="Macrame"
              color="primary"
            ></v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-zoom-effect card-uniform"
              rounded
              image="https://hilazia.online/images/KombuchaCard.png"
              title="Kombuchas"
              color="primary"
            ></v-card>
          </v-col>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row class="fill-height align-center">
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-zoom-effect card-uniform"
              rounded
              image="https://hilazia.online/images/CorsetCard.jpg"
              title="Corsets"
              color="primary"
            ></v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-zoom-effect card-uniform"
              rounded
              image="https://hilazia.online/images/DressCard.jpg"
              title="Vestidos"
              color="primary"
            ></v-card>
          </v-col>
        </v-row>
      </v-carousel-item>

      <v-carousel-item>
        <v-row class="fill-height align-center">
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-zoom-effect card-uniform"
              rounded
              image="https://hilazia.online/images/PlantCard.jpg"
              title="Plantas"
              color="primary"
            ></v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="px-2 py-8 text-center card-uniform"
              rounded
              title="Pantalones"
              color="primary"
            ></v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style scoped>
.text-h1 {
  color: rgb(var(--v-theme-primary));
}
.v-parallax {
  border-radius: 0px 0px 62px 62px;
}
.category-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}
.category-card > * {
  position: relative;
  z-index: 2;
  color: white;
}

.card-zoom-effect {
  overflow: hidden;
}

.card-zoom-effect :deep(.v-img) {
  transition: transform 0.5s ease;
}

.card-zoom-effect:hover :deep(.v-img) {
  transform: scale(1.2);
}

.card-uniform {
  height: 200px;
}

.gradient-text {
  background: linear-gradient(to top, #70908b, #caf3e5, #07484a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
