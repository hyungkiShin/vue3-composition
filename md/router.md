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


### '<RouterLink>'
- Vue Router 에서는 페이지를 이동할 때 a 태그를 사용하는 대신 커스텀 컴포넌트인 RouterLink 를 사용하여 다른 페이지 링크를 만들어야 한다.
- 이유는 a 태그로 이동시 페이지가 새로고침 되버리기 때문에, singlePage App 에선 RouterLink 로 이동하는것이 페이지 리로딩 없이 이동 하기 때문에, 사용자 경험상 RouterLink 를 사용해야 한다.

### '<RouterView>'
- Url 에 매핑된 컴포넌트를 화면에 표시한다.

### url 을 통해 Parameter 를 넘기는 방법
- query, hash 두가지 형태로 받을수 있다.
- /users/searchText=love -> query
- /users/alice#profile   -> hash

### replace 사용법
```html
<RouterLink :to="{name: [registCustomName], replace: true}" />
```