import dayjs from 'dayjs';

export default {
  install(app) {
    // 컴포넌트 에서 app 인스턴스를 전역적으로 접근하기 위해
    app.config.globalProperties.$dayjs = dayjs;
    // setup 함수에서도 접근할수 있도록
    app.provide('dayjs', dayjs);
  },
};
