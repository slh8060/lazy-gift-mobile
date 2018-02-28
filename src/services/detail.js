import request from 'utils/request';

export function detailList(detailId) {
  return request('/api/detail.json', `detailId=${detailId}`);
}

export function commentList(detailId) {
  console.log('222', detailId);
  return request('/api/commentList.json', `detailId=${detailId}`);
}

