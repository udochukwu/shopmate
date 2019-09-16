export default {
  modals:{
    showModal: false,
    authType: '',
    showProfileModal: false,
    showCartModal: false,
  },
  products: {
    count: 0,
    rows: [],
    loading: false,
    error: null,
    searchResults: false
  },
  product: {
    data: {},
    loading: false,
    success: false,
    reviews:[]
  },
  sidebar: {
    visible: false,
  },
  auth: {
    loading: false,
    success: false,
    failure: false,
    isAuthenticated: false,
    error: {}
  },
  profile: {
    profile: {},
    updateLoading: false,
    updateSuccess: false
  },
  settings:{
   dummyImages: false
  },
  cart: {
    cartId: '',
    items:[],
    addingToCart: false,
  },
  order: {
    currentOrderId: null,
    order: {},
    chargeLoading: false,
    chargeSuccess:false,
    chargeFailure: false,
    chargeDetails: {},
    orders:[],
    loading: false,
    createOrderLoading: false,
    createOrderSuccess: false,
    createOrderFailure: false,
    getOrderLoading: false,
    getOrderSuccess: false,
    getOrderFailure: false,
  },
};
