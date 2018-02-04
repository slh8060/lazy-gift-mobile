import request from 'utils/request';

export function fetch(param) {
  const { userId, start } = param;
  return request('/api/recommend.json', `userId=${userId}&start=${start}`);
}
export function approve(param) {
  const { detailId, userId, isApprove } = param;
  return request('/api/approve.json', `detailId=${detailId}&userId=${userId}&isApprove=${isApprove}`);
}
