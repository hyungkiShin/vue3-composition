### js code 에서 page 이동 하는 방법

#### 라우터를 정의 
```js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
```

#### 그리고 main.js 에서 
```js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';

import { createApp } from 'vue';
import App from './App.vue';

// 이구간에서 use 에서 router 를 집어 넣었음 -> 

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

```
- createApp(App).use(router) 에서 router 를 집어 넣음 으로써 모든 자식 컴포넌트에 router, route 같은 객체를 사용할 수 있다.
- router 는 page 를 이동할수 있게 해주는 객체
- route 는 현재 페이지 컴포넌트에 대한 정보

### route 매핑 정보를 가져오는 방법
- $route.path 로 해당 컴포넌트에서 사용되고 있는 path 추출하기

### useRoute()
- 현재 컴포넌트에 대한 path 정보 가져오기
  - vue-router 에서 useRoute() 가져오기
  - const route = useRoute()