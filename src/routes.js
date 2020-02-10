import Home from './components/Home/Home'
import Contact from './components/Contact'
import Store from './components/Store/Store'
import Cart from './components/Cart/Cart'

export const routes = [
  { path:'/', component: Home, name: 'Home' },
  { path:'/contact', component: Contact, name: 'Contact' },
  { path:'/store', component: Store, name: 'Store' },
  { path: '/cart', component: Cart, name: 'Cart' }
];


