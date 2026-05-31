import api from './api'

export const userService = {
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (data: FormData) => api.patch('/auth/profile', data),
  changePassword: (data: any) => api.post('/auth/change-password', data),
  toggleBookmark: (eventId: number) => api.post(`/auth/bookmark/${eventId}`),
  getBookmarks: () => api.get('/auth/bookmarks'),
  getAdminUsers: () => api.get('/auth/admin/users'),
  toggleUserStatus: (userId: number) => api.post(`/auth/admin/users/${userId}/toggle-status`),
}
