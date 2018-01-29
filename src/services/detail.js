import request from 'utils/request';

export function fetch(detailId) {
  return request('/api/detail.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `detailId=${detailId}`,
  });
}

export function commentList(detailId) {
  return request('/api/commentList.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `detailId=${detailId}`,
  });
}

