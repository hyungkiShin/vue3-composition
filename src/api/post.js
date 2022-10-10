// axios
import { posts } from '.';

// const posts = [
//   { id: 1, title: '제목1', content: '내용1', createAt: '2023-01-01' },
//   { id: 2, title: '제목2', content: '내용2', createAt: '2023-01-02' },
//   { id: 3, title: '제목3', content: '내용3', createAt: '2023-01-03' },
//   { id: 4, title: '제목4', content: '내용4', createAt: '2023-01-04' },
//   { id: 5, title: '제목5', content: '내용5', createAt: '2023-01-05' },
// ];

export function getPosts(params) {
  return posts.get('/', { params });
}

export function getPostById(id) {
  return posts.get(`/${id}`);
}

export function createPost(data) {
  return posts.post('', data);
}

export function updatePost(id, data) {
  return posts.put(`/${id}`, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}
