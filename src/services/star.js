import request from 'utils/request';


export function fetch(param) {
  const { userId } = param;
  console.log('fetch', userId);
  return request('/api/collectList.json', `userId=${userId}`);
}
