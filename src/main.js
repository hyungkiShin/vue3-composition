import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import globalComponents from './plugins/global-components';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';

const app = createApp(App);

app.use(router);
app.use(globalComponents);
app.use(dayjs);
app.use(globalDirectives);
app.mount('#app');
// const app = createApp(App);
// app.use(router);
// app.use(dayjs);
// app.mount('#app');
