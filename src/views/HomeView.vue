<template>
  <!-- <div v-if="val"> -->
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">
      about 으로 이동
    </button>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import { useRouter } from 'vue-router';
// let val = ref(false);

const router = useRouter();

const goAboutPage = () => {
  console.log('제가 호출이 됬나요 ... ? ');
  router.push('/about');
};

// const a = setTimeout(() => {
//   val.value = true;
// }, 3000);
</script>

<style></style>
