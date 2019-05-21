export default {
  modals:{
    showModal: false,
    authType: '',
  },
  products: {
    count: 0,
    rows: [],
    loading: false,
    error: null,
    searchResults: false
  },
  sidebar: {
    visible: false,
  },
  auth: {
    loading: false,
    success: false,
    failure: false,
    error: {}
  },
  user: {
    isAuthenticated: false,
  }
};
