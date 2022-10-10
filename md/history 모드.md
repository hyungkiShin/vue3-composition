### vue router 에서 history mode
- 라우터 인스턴스를 사용할때 history 옵션을 사용하고 있다.
- createWebHistory 함수는 history mode 로 동작 시킬때 사용하는 함수이다.
- createWebHashHistory 는 hash 태그로 시작한다.

### 기본경로 베이스 잡을경우
```js
const router = createRouter({
  history: createWebHistory('/base')
})
```

