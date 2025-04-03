<script setup lang="ts">
interface SocialIcon {
  name: string
  icon: string
  color?: string
}

const socialIcons: SocialIcon[] = [
  { name: 'twitter', icon: 'mdi-twitter', color: 'primary' },
  { name: 'instagram', icon: 'mdi-instagram', color: 'primary' },
  { name: 'whatsapp', icon: 'mdi-whatsapp', color: 'primary' },
]

// Obtener el número de WhatsApp desde las variables de entorno
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+1234567890' // Valor predeterminado como fallback

const handleSocialClick = (socialName: string) => {
  switch (socialName) {
    case 'facebook':
      window.open('https://facebook.com/yourpage', '_blank')
      break
    case 'twitter':
      window.open('https://twitter.com/BrianSanchezIzq', '_blank')
      break
    case 'linkedin':
      window.open('https://linkedin.com/company/yourcompany', '_blank')
      break
    case 'instagram':
      window.open('https://instagram.com/yourhandle', '_blank')
      break
    case 'whatsapp':
      const message = encodeURIComponent('Hola, me gustaría obtener más información.')
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
      break
    default:
      console.log(`No action defined for ${socialName}`)
  }
}
</script>

<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in socialIcons"
        :key="icon.name"
        :icon="icon.icon"
        :color="'primary'"
        density="comfortable"
        variant="text"
        @click="handleSocialClick(icon.name)"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
      interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa
      consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
      lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
      Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Hilazia</strong></div>
  </v-footer>
</template>
