import { createVuetify, type ThemeDefinition } from 'vuetify'

const hilazia: ThemeDefinition = {
  colors: {
    primary: '#70908B',
    secondary: '#CAF3E5',
    'primary-darken-1': '#07484A',
    error: '#FFF4E7',
    info: '#E0EFF6',
    success: '#CAF3E5',
    warning: '#EEEBFF',
  }
}


export default createVuetify({
  theme: {
    defaultTheme: 'hilazia',
    themes: {
      hilazia
    }
  }
})
