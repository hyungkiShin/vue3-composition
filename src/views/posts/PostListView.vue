<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter v-model:title="params.title_like" v-model="params._limit" />

    <hr class="my-4" />
    <div class="row g-3">
      <AppGrid :items="posts">
        <template v-slot="{ item }">
          <PostItem
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="goPage(item.id)"
          ></PostItem>
        </template>
      </AppGrid>
    </div>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="page => (params._page = page)"
    />
    <hr class="my-5" />
    <AppCard>
      <PostDetailView id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import { getPosts } from '@/api/post';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';

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
