import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#00bcd4',
        secondary: '#8bc34a',
        accent: '#2196f3',
        error: '#ff5722',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50',
      },
    },
  },
});
