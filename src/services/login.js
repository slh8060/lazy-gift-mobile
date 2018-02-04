import request from 'utils/request';

export function login({ username, userpwd }) {
  return request('/api/login.json', `username=${username}&userpwd=${userpwd}`);
}
