const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어',
    body: '리덕스 미들웨어 만들기'
  }, 
  {
    id: 2,
    title: 'redux-thunk 를 사용',
    body: 'redux-thunk 를 사용해서 비동기 작업 진행'
  }, 
  {
    id: 3,
    title: 'redux-saga 사용',
    body: 'redux-saga 사용하여 비동기 작업 처리 하기'
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async id => {
  await sleep(500);
  return posts.find(post => post.id === id);
};