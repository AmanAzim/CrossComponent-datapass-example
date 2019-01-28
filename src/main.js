import Vue from 'vue'
import App from './App.vue'

export const eventBus=new Vue(); //always have to write above the main Vue instance

new Vue({
  el: '#app',
  render: h => h(App)
});
