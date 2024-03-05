// src/environments/environment.local.ts
export const environment = {
  production: false,
  index: 'http://127.0.0.1:8000/api/index',
  store: 'http://127.0.0.1:8000/api/store',
  login: 'http://127.0.0.1:8000/api/login',
  logout: 'http://127.0.0.1:8000/api/logout',
  update: 'http://127.0.0.1:8000/api/update', 
  delete: (id: string) => `http://127.0.0.1:8000/api/delete/${id}`
};
