import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import './assets/CSS/style.css'
// import LoginPage from './components/LoginPage.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons'


library.add(fab);


const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
