### ref 와 reactive 차이 
- ref 의 장점은 한꺼번에 객체 할당이 가능
- reactive 

ex ) ref 식으로 할당
```js
import { ref } from 'vue'

const form = ref({}); // 객체 초기화

const data = { "title" : '제목1' , "content": "내용1", createdAt: "2024-04-01" }

// 핵심 포인트
form.value = { ...data }

// 만약 form = { ...data } 으로 하였다면 반응형 데이터가 죽는다.
// form.value = 객체할당 // O
// form       = 객첼할당 // X
```

ex ) reactive 식으로 할당
```js
import { ref } from 'vue'

const form = ref({}); // 객체 초기화

const data = { "title" : '제목1' , "content": "내용1", createdAt: "2024-04-01" }

// 핵심 포인트
form.title = data.title
form.content = data.content
form.createdAt = data.createdAt
```

---
정리

ref
장점) 객체 할당 가능
단점) form.value.title, form.value.content 로 접근 

reactive
장점) form.title, form.content 식으로 value 안붙이고 접근 가능
단점) 객체 할당 불가능

링크: [Vue 3 Composition API: ref() vs. reactive()](https://markus.oberlehner.net/blog/vue-3-composition-api-ref-vs-reactive/)