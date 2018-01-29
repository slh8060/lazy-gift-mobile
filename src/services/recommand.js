import request from 'utils/request';
import PAGE_SIZE from '../constants';
import detail from "../models/detail";

export function fetch({ userId = 11 }) {
  // return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
  return request('/api/recommend.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `userId=${userId}&start=1`,
  });
}

export function remove(detailId) {
  console.log('test:', detailId);
}
