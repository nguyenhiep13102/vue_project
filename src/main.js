import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import './assets/CSS/style.css'
// import LoginPage from './components/LoginPage.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab,far,fas);



const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);

app.mount('#app');
