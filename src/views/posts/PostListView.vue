<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-4">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <hr class="my-4" />
    <AppCard>
      <PostDetailView id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import AppCard from '@/components/app/AppCard.vue';
import { getPosts } from '@/api/post';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from '@/views/posts/PostDetailView.vue';

const router = useRouter();
const posts = ref([]);

const fetchPosts = async () => {
  // const { data } = await getPosts();
  // posts.value = data;
  ({ data: posts.value } = await getPosts());
};

fetchPosts();

const goPage = id => {
  /* path 로 이동하는 법
    router.push(`/posts/${id}`);
  */
  /* router 에 정의한 name 으로 객체를 보냄으로 써 이동하는 법 */
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    // query: {
    //   searchText: 'hello',
    // },
    // hash: '#world',
  });
};
</script>

<style scope></style>
