import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/style.min.css';
import router from './router';
import Chart from 'chart.js/auto';

const app = createApp(App);

app.use(router);
app.mount('#app');