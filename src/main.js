import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase,initializeApp({
  apiKey: "AIzaSyAJTizm79vVa24IpoQkxMEagIJS1OD8Q0I",
  authDomain: "vue-calendar-4aca9.firebaseapp.com",
  databaseURL: "https://vue-calendar-4aca9.firebaseio.com",
  projectId: "vue-calendar-4aca9",
  storageBucket: "vue-calendar-4aca9.appspot.com",
  messagingSenderId: "434010666952",
  appId: "1:434010666952:web:050c99bb3fdb0f714bb2fd"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
