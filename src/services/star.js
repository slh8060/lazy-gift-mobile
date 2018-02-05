import request from 'utils/request';


export function fetch(param) {
  const { userId } = param;
  return request('/api/collectList.json', `userId=${userId}`);
}
