<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div>
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input type="text" class="form-control" id="exampleControlInput1" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          내용
        </label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2">목록</button>
        <button class="btn btn-primary" @click="goListPage">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goListPage = () => {
  router.push({ name: 'PostList' });
};
</script>

<style scope></style>
