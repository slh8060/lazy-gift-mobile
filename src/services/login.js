import request from 'utils/request';

export function login({ username, userpwd }) {
  return request('/api/login.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: `username=${username}&userpwd=${userpwd}`,
  });
}
