<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a class="page-link" href="#" @click.prevent="--params._page"
            >Previous</a
          >
        </li>
        <li
          v-for="page in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <a class="page-link" href="#" @click.prevent="params._page = page">{{
            page
          }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: !(params._page < pageCount) }"
        >
          <a class="page-link" href="#" @click.prevent="++params._page">Next</a>
        </li>
      </ul>
    </nav>
    <hr class="my-5" />
    <AppCard>
      <PostDetailView id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import AppCard from '@/components/app/AppCard.vue';
import { getPosts } from '@/api/post';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from '@/views/posts/PostDetailView.vue';

const router = useRouter();
const posts = ref([]);

// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _page: 1,
  _limit: 3,
  title_like: '',
});

const fetchPosts = async () => {
  // ({ data: posts.value, headers } = await getPosts(params.value));
  const { data, headers } = await getPosts(params.value);
  posts.value = data;
  totalCount.value = headers['x-total-count'];
};

watchEffect(fetchPosts);
// fetchPosts();

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
