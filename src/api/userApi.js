import 'whatwg-fetch';

import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
   return get('users');
}

export function deleteUser(id) {
   return del(`users/${id}`);
}

function get(url) {
   return fetch(baseUrl + url).then(onSuccess, onFailure);
}

function del(url) {
   const request = new Request(baseUrl + url, {
      method: 'DELETE'
   });

   return fetch(request).then(onSuccess, onFailure);
}

function onSuccess(response) {
   return response.json();
}

function onFailure(err) {
   console.log(err); // eslint-disable-line no console
}
