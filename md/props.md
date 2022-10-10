### props 컴포넌트에 활용하기

- 철수가 ListView 에서 DetailView 를 미리 보고싶다 가정 한다.
- DetailView 는 $route.params 의 id 값에 의존해 구현되는 페이지라고 가정할때, 철수는 ListView 에서 id 값만 넘겨서 페이지를 확인 하고 싶다.


### route 에서 객체/함수 두가지 형태로 받게 할 수 있다.

먼저 객체모드에선 

객체모드
```js
const routes  = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]
```

함수 모드
```js
const routes  = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: route => [{ query: route.query.q }]
  }
]
```

### 진짜 놀랍게도 모르고 있었던것.

객체 리턴 방법
```js
    props: route => {
      return {
        id: +route.params.id,
      };
    },

    props: route => ({
        id: +route.params.id,
    }),
```