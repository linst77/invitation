import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import myStyle from './assets/style/firststyle.css';
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
loadFonts()

createApp(App)
  .use(vuetify)
  .use(VCalendar, {})
  .use(myStyle)
  .mount('#app')
