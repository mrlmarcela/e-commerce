import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.css';
import './assets/css/style.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import router from './router';

const app = createApp(App);

app.use(bootstrap);
app.use(router);
app.mount('#app');