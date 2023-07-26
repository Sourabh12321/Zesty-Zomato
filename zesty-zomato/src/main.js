import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import RegisterLogin from './components/RegisterLogin.vue';
import HomePage from './components/HomePage.vue'
import DishesComp from './components/DishesComp.vue'
import CartPage from './components/CartPage.vue'
import OrderDetails from './components/OrderDetails.vue'
import AdminPage from './components/AdminPage.vue'
import CheckOut from './components/CheckOut.vue'

const routes = [
  { path: '/', component: HomePage,name:'Home' },
  { path: '/register', component: RegisterLogin },
  { path: '/dishes', component: DishesComp, name: 'dishes'},
  { path: '/cart', component: CartPage },
  { path: '/orderstaus', component: OrderDetails },
  { path: '/admin', component: AdminPage ,name: 'admin'},
  { path: '/checkout', component: CheckOut ,name: 'CheckOut'},
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
