import request from 'utils/request';

export function fetch(param) {
  const { userId } = param;
  return request('/api/myMessageComment.json', `userId=${userId}`);
}
