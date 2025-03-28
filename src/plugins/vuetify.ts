import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const hilazia: ThemeDefinition = {
  colors: {
    primary: '#70908B',
    secondary: '#CAF3E5',
    'primary-darken-1': '#07484A',
    error: '#FFF4E7',
    info: '#E0EFF6',
    success: '#CAF3E5',
    warning: '#EEEBFF',
  },
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'hilazia',
    themes: {
      hilazia,
    },
  },
})
