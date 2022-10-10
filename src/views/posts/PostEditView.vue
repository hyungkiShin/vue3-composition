<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div>
        <label for="exampleFormControlInput1" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="exampleControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          내용
        </label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary" @click="edit">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/post';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  const { data } = await getPostById(+id);
  setForm(data);
};
fetchPost();

const setForm = ({ title, content, createdAt }) => {
  form.value.title = title;
  form.value.content = content;
  form.value.createdAt = createdAt;
};

const edit = async () => {
  await updatePost(id, { ...form.value });
  goDetailPage();
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });
</script>

<style scope></style>
